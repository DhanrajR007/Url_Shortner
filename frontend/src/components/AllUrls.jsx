import React from "react";

const AllUrls = ({ urlData }) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {urlData.map((url) => (
          <div key={url.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start">
              <div className="truncate">
                <p className="text-gray-500 text-sm">Original URL</p>
                <a
                  href={url.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline truncate block"
                >
                  {url.originalUrl}
                </a>
              </div>
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  url.status === "Active"
                    ? "text-green-800 bg-green-200"
                    : "text-red-800 bg-red-200"
                }`}
              >
                {url.status}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">Short URL</p>
              <a
                href={url.shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {url.shortUrl}
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">Clicks</p>
              <p className="text-2xl font-bold text-gray-800">{url.clicks}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllUrls;
