import React, { useEffect, useState } from "react";
import { Search, TrendingUp, TrendingDown, DollarSign, BarChart3 } from "lucide-react";

// API configuration
const API_CONFIG = {
  baseURL: 'https://indian-stock-exchange-api2.p.rapidapi.com/stock',
  headers: {
    'x-rapidapi-host': 'indian-stock-exchange-api2.p.rapidapi.com',
    'x-rapidapi-key': '97a2ee11damsh40e28189eb2c37ap1d409ajsnc1fbe3a59633'
  }
};

export default function LiveStocks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [searchLoading, setSearchLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError("Please enter a stock name or symbol");
      return;
    }
    
    setSearchLoading(true);
    setSearchResult(null);
    setError(null);

    try {
      // Make API call to RapidAPI
      const response = await fetch(`${API_CONFIG.baseURL}?name=${encodeURIComponent(searchTerm)}`, {
        method: 'GET',
        headers: API_CONFIG.headers
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data); // For debugging

      // Transform API data to match our component structure
      if (data && Array.isArray(data) && data.length > 0) {
        const transformedData = data.map(stock => ({
          tickerId: stock.symbol || stock.ticker || 'N/A',
          companyName: stock.companyName || stock.name || 'Unknown Company',
          industry: stock.industry || stock.sector || 'Unknown',
          symbol: stock.symbol || stock.ticker || 'N/A',
          currentPrice: {
            BSE: stock.price || stock.currentPrice || 'N/A',
            NSE: stock.price || stock.currentPrice || 'N/A'
          },
          percentChange: stock.change || stock.percentChange || '0',
          marketCap: stock.marketCap || 'N/A',
          yearHigh: stock.high52Week || stock.yearHigh || 'N/A',
          yearLow: stock.low52Week || stock.yearLow || 'N/A',
          sector: stock.sector || stock.industry || 'Unknown',
          exchange: stock.exchange || 'NSE/BSE'
        }));
        
        setSearchResult(transformedData);
      } else if (data && !Array.isArray(data)) {
        // Handle single object response
        const transformedData = [{
          tickerId: data.symbol || data.ticker || 'N/A',
          companyName: data.companyName || data.name || 'Unknown Company',
          industry: data.industry || data.sector || 'Unknown',
          symbol: data.symbol || data.ticker || 'N/A',
          currentPrice: {
            BSE: data.price || data.currentPrice || 'N/A',
            NSE: data.price || data.currentPrice || 'N/A'
          },
          percentChange: data.change || data.percentChange || '0',
          marketCap: data.marketCap || 'N/A',
          yearHigh: data.high52Week || data.yearHigh || 'N/A',
          yearLow: data.low52Week || data.yearLow || 'N/A',
          sector: data.sector || data.industry || 'Unknown',
          exchange: data.exchange || 'NSE/BSE'
        }];
        
        setSearchResult(transformedData);
      } else {
        setSearchResult([]);
        setError(`No results found for "${searchTerm}"`);
      }
    } catch (error) {
      console.error("Search error:", error);
      if (error.message.includes('429')) {
        setError("API rate limit reached. Please try again later.");
      } else if (error.message.includes('401') || error.message.includes('403')) {
        setError("API authentication failed. Please check your API key.");
      } else if (error.message.includes('404')) {
        setError(`No stock found with name "${searchTerm}"`);
      } else if (!navigator.onLine) {
        setError("No internet connection. Please check your connection and try again.");
      } else {
        setError("Search failed. Please try again later.");
      }
    } finally {
      setSearchLoading(false);
    }
  };

  const formatCurrency = (value) => {
    if (!value) return "N/A";
    return `₹${parseFloat(value).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const formatMarketCap = (value) => {
    if (!value) return "N/A";
    const num = parseFloat(value);
    if (num >= 100000) {
      return `₹${(num / 100000).toFixed(1)}L Cr`;
    } else if (num >= 1000) {
      return `₹${(num / 1000).toFixed(1)}K Cr`;
    }
    return `₹${num.toFixed(1)} Cr`;
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchResult(null);
    setError(null);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-xl p-8 mb-6 border border-slate-200">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-blue-100 rounded-full">
            <BarChart3 className="text-blue-600 w-8 h-8" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-800">Stock Market Search</h1>
            <p className="text-slate-600 mt-1">Search and discover Indian stocks with real-time information</p>
          </div>
        </div>

        {/* Search Section */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for stocks (e.g., Tata Steel, RELIANCE, Infosys)"
              className="w-full pl-12 pr-12 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 text-slate-700 placeholder-slate-400 bg-slate-50 focus:bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                ✕
              </button>
            )}
          </div>
          <button
            onClick={handleSearch}
            disabled={searchLoading || !searchTerm.trim()}
            className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl disabled:hover:shadow-lg"
          >
            {searchLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Searching...
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
                Search
              </>
            )}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-red-800 font-medium">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Search Results */}
        {searchResult && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-800">
                Search Results for "{searchTerm}"
              </h2>
              <span className="text-slate-500 text-sm">
                {searchResult.length} result{searchResult.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            {searchResult.length > 0 ? (
              <div className="space-y-4">
                {searchResult.map((stock) => (
                  <div
                    key={stock.tickerId}
                    className="border-2 border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300 bg-gradient-to-r from-white to-slate-50"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-slate-800">{stock.companyName}</h3>
                        <div className="flex items-center gap-4 flex-wrap">
                          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-bold">
                            {stock.symbol}
                          </span>
                          <span className="text-slate-600 font-medium">{stock.exchange}</span>
                          <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                            {stock.sector}
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-right space-y-2">
                        <div className="text-3xl font-bold text-slate-800">
                          {formatCurrency(stock.currentPrice.NSE)}
                        </div>
                        <div className={`flex items-center justify-end gap-2 px-3 py-1 rounded-full ${
                          parseFloat(stock.percentChange) >= 0 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {parseFloat(stock.percentChange) >= 0 ? (
                            <TrendingUp className="w-4 h-4" />
                          ) : (
                            <TrendingDown className="w-4 h-4" />
                          )}
                          <span className="font-bold">{stock.percentChange}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-slate-200">
                      <div className="text-center p-4 bg-white rounded-lg border border-slate-100">
                        <p className="text-sm text-slate-500 mb-1">Market Cap</p>
                        <p className="font-bold text-slate-800 text-lg">{formatMarketCap(stock.marketCap)}</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg border border-slate-100">
                        <p className="text-sm text-slate-500 mb-1">52W High</p>
                        <p className="font-bold text-green-600 text-lg">{formatCurrency(stock.yearHigh)}</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg border border-slate-100">
                        <p className="text-sm text-slate-500 mb-1">52W Low</p>
                        <p className="font-bold text-red-600 text-lg">{formatCurrency(stock.yearLow)}</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg border border-slate-100">
                        <p className="text-sm text-slate-500 mb-1">Industry</p>
                        <p className="font-bold text-slate-800 text-lg">{stock.industry || stock.sector}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-300">
                <Search className="w-20 h-20 mx-auto mb-4 text-slate-300" />
                <h3 className="text-xl font-semibold text-slate-600 mb-2">No stocks found</h3>
                <p className="text-slate-500 mb-4">Try searching with different keywords</p>
                <div className="flex justify-center gap-2 flex-wrap">
                  {["Tata Steel", "Reliance", "Infosys"].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => setSearchTerm(suggestion)}
                      className="px-3 py-1 bg-white border border-slate-300 rounded-md text-sm hover:bg-slate-100 transition-colors"
                    >
                      Try "{suggestion}"
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Sample Searches */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl border border-blue-200">
          <h3 className="font-bold text-slate-700 mb-4 text-lg">Popular Searches:</h3>
          <div className="flex flex-wrap gap-3">
            {["Tata Steel", "Reliance", "HDFC Bank", "Infosys", "TCS", "Wipro"].map((term) => (
              <button
                key={term}
                onClick={() => setSearchTerm(term)}
                className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 font-medium text-slate-700 shadow-sm hover:shadow"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Debug Information */}
      <div className="bg-white rounded-xl shadow-xl p-8 border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Integration Guide</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-700">Search Features</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Multi-field search:</strong> Company name, symbol, or sector</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Case insensitive:</strong> Works with any letter case</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Real-time feedback:</strong> Instant error handling</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Keyboard support:</strong> Press Enter to search</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-700">Integration Tips</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>API Replacement:</strong> Replace mock data with your API calls</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Data Mapping:</strong> Adjust field mapping to match your API response</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Error Handling:</strong> Add network error handling for production</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Performance:</strong> Add debouncing for better UX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}