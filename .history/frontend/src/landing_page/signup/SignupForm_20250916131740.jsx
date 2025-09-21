import React from "react";

function SignupForm() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        {/* Left side image */}
        <div className="text-center">
          <img
            src="https://zerodha.com/static/images/account_open.svg"
            alt="Open account"
            className="mx-auto w-3/4"
          />
        </div>

        {/* Right side form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Open a Zerodha account
          </h2>
          <p className="text-gray-600 mb-6">
            Start investing and trading in just a few minutes.
          </p>

          <form className="space-y-5">
            {/* Username Field */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <div className="flex rounded-md shadow-sm border border-gray-300 focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-100">
                <span className="px-3 py-2 bg-gray-100 text-gray-500 text-sm rounded-l-md">
                  workcation.com/
                </span>
                <input
                  type="text"
                  id="username"
                  placeholder="janesmith"
                  className="flex-1 px-3 py-2 focus:outline-none rounded-r-md"
                  required
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Choose a unique username for your account.
              </p>
            </div>

            {/* Mobile Number Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mobile Number
              </label>
              <div className="flex rounded-md shadow-sm border border-gray-300 focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-100">
                <span className="px-3 py-2 bg-gray-100 text-gray-500 text-sm rounded-l-md flex items-center">
                  <img
                    src="https://zerodha.com/static/images/india-flag.svg"
                    alt="India"
                    className="h-4 mr-1"
                  />
                  +91
                </span>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your 10-digit mobile number"
                  pattern="[0-9]{10}"
                  className="flex-1 px-3 py-2 focus:outline-none rounded-r-md"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              Get OTP
            </button>
          </form>

          {/* Terms & Privacy */}
          <p className="text-gray-500 text-xs mt-4 text-center">
            By proceeding, you agree to the Zerodha{" "}
            <a
              href="https://zerodha.com/terms-and-conditions"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              terms
            </a>{" "}
            &amp;{" "}
            <a
              href="https://zerodha.com/privacy-policy"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignupForm;
