import React, { useState } from "react";
import axios from "axios";
import { instance } from "../utils/AxiosUtility.js";

const UrlShortner = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await instance.post("api/create", {
        url,
      });
      setShortUrl(response.data);
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="url-input"
            className="text-sm font-medium text-slate-300 ml-1"
          >
            Destination URL
          </label>
          <div className="relative">
            <input
              id="url-input"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/very-long-url..."
              required
              className="w-full bg-slate-950 text-white placeholder-slate-500 border border-slate-800 rounded-xl py-4 px-5 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/20 transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {isLoading ? "Shortening..." : "Shorten URL"}
        </button>
      </form>

      {shortUrl && (
        <div className="mt-8 pt-8 border-t border-slate-800 animate-fade-in">
          <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-3 ml-1">
            Your Shortened Link
          </p>
          <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 rounded-xl p-2 pr-2">
            <div className="flex-1 px-3 py-2 overflow-hidden">
              <p className="text-indigo-400 font-mono text-sm truncate">
                {shortUrl}
              </p>
            </div>
            <button
              onClick={handleCopy}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                isCopied
                  ? "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
                  : "bg-slate-800 text-white hover:bg-slate-700"
              }`}
            >
              {isCopied ? (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Copied!
                </>
              ) : (
                "Copy"
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlShortner;
