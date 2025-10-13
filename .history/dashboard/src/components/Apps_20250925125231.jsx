import React, { useEffect, useState } from "react";
import { Search, TrendingUp, TrendingDown, DollarSign, BarChart3 } from "lucide-react";

// Mock data based on the provided Tata Steel information
const mockStockData = {
  "tata steel": {
    tickerId: "S0003026",
    companyName: "Tata Steel",
    industry: "Iron & Steel",
    symbol: "TATASTEEL",
    currentPrice: {
      BSE: "174.8",
      NSE: "174.85"
    },
    percentChange: "-0.37",
    marketCap: "213428.23",
    yearHigh: "175.7",
    yearLow: "104.3",
    sector: "Iron & Steel",
    exchange: "NSE/BSE"
  },
  "jsw steel": {
    tickerId: "S0003097",
    companyName: "JSW Steel",
    symbol: "JSWSTEEL",
    currentPrice: {
      BSE: "909.05",
      NSE: "909.05"
    },
    percentChange: "-0.92",
    marketCap: "221490.24",
    yearHigh: "929.8",
    yearLow: "687.7",
    sector: "Iron & Steel",
    exchange: "NSE/BSE"
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
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Search in mock data (case insensitive)
      const searchKey = searchTerm.toLowerCase();
      const found = mockStockData[searchKey] || 
        Object.values(mockStockData).find(stock => 
          stock.companyName.toLowerCase().includes(searchKey) ||
          stock.symbol.toLowerCase().includes(searchKey)
        );

      if (found) {
        setSearchResult([found]);
      } else {
        setSearchResult([]);
        setError(`No results found for "${searchTerm}"`);
      }
    } catch (error) {
      console.error("Search error:", error);
      setError("Search failed. Please try again.");
    } finally {
      setSearchLoading(false);
    }
  };

  const formatCurrency = (value) => {
    if (!value) return "N/A";
    return `₹${parseFloat(value).toFixed(2)}`;
  };

  const formatMarketCap = (value) => {
    if (!value) return "N/A";
    const num = parseFloat(value);
    if (num >= 1000) {
      return `₹${(num / 1000).toFixed(1)}K Cr`;
    }
    return `₹${num.toFixed(1)} Cr`;
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <BarChart3 className="text-blue-600" />
          Stock Market Search
        </h1>

        {/* Search Section */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for stocks (e.g., Tata Steel, TATASTEEL)"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>
          <button
            onClick={handleSearch}
            disabled={searchLoading}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
          >
            {searchLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Searching...
              </>
            ) : (
              <>
                <Search className="w-4 h-4" />
                Search
              </>
            )}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Search Results */}
        {searchResult && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Search Results for "{searchTerm}"
            </h2>
            
            {searchResult.length > 0 ? (
              <div className="grid gap-4">
                {searchResult.map((stock) => (
                  <div
                    key={stock.tickerId}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{stock.companyName}</h3>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            {stock.symbol}
                          </span>
                          <span className="text-gray-600">{stock.exchange}</span>
                          <span className="text-gray-600">• {stock.sector}</span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-800">
                          {formatCurrency(stock.currentPrice.NSE)}
                        </div>
                        <div className={`flex items-center gap-1 ${
                          parseFloat(stock.percentChange) >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {parseFloat(stock.percentChange) >= 0 ? (
                            <TrendingUp className="w-4 h-4" />
                          ) : (
                            <TrendingDown className="w-4 h-4" />
                          )}
                          <span className="font-medium">{stock.percentChange}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-sm text-gray-500">Market Cap</p>
                        <p className="font-semibold">{formatMarketCap(stock.marketCap)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">52W High</p>
                        <p className="font-semibold text-green-600">{formatCurrency(stock.yearHigh)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">52W Low</p>
                        <p className="font-semibold text-red-600">{formatCurrency(stock.yearLow)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Industry</p>
                        <p className="font-semibold">{stock.industry || stock.sector}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Search className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p>No stocks found matching your search.</p>
                <p className="text-sm mt-2">Try searching for "Tata Steel" or "JSW Steel"</p>
              </div>
            )}
          </div>
        )}

        {/* Sample Searches */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-700 mb-2">Try these searches:</h3>
          <div className="flex flex-wrap gap-2">
            {["Tata Steel", "JSW Steel", "TATASTEEL"].map((term) => (
              <button
                key={term}
                onClick={() => setSearchTerm(term)}
                className="px-3 py-1 bg-white border border-gray-300 rounded-md text-sm hover:bg-gray-100 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Debug Information */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Troubleshooting Tips</h2>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-2">
            <span className="font-semibold text-blue-600">•</span>
            <span><strong>API Integration:</strong> Ensure your search API endpoint is correct and returns data in expected format</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-semibold text-blue-600">•</span>
            <span><strong>Data Mapping:</strong> Check if search results match the component's expected data structure</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-semibold text-blue-600">•</span>
            <span><strong>Error Handling:</strong> Add proper error handling for network failures and API limits</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-semibold text-blue-600">•</span>
            <span><strong>Search Logic:</strong> Implement fuzzy search or multiple search criteria (name, symbol, etc.)</span>
          </div>
        </div>
      </div>
    </div>
  );
}