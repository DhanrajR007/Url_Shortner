import React, { useState } from "react";
import { instance } from "../utils/AxiosUtility.js";

const CustomUrlCreator = () => {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setShortUrl("");

    try {
      const response = await instance.post("create", {
        url,
        slug: slug.trim() || undefined, // Send undefined if empty so backend handles it
      });
      setShortUrl(response.data);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to create custom URL");
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
    <div className="bg-white rounded-lg shadow-md p-6 ">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        Create Custom URL
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="custom-url-input"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Destination URL
          </label>
          <input
            id="custom-url-input"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/my-long-url"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="custom-slug-input"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Custom Alias (Optional)
          </label>
          <div className="flex items-center">
            <span className="text-gray-500 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md px-3 py-2">
              short.ly/
            </span>
            <input
              id="custom-slug-input"
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="my-custom-link"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-r-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Creating..." : "Create Custom Link"}
        </button>
      </form>

      {shortUrl && (
        <div className="mt-6 p-4 bg-gray-50 rounded-md border border-gray-200">
          <p className="text-sm text-gray-500 mb-2">Your Custom Link:</p>
          <div className="flex items-center gap-2">
            <input
              readOnly
              value={shortUrl}
              className="flex-1 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            />
            <button
              onClick={handleCopy}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isCopied
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {isCopied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomUrlCreator;
