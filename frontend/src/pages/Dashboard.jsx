import React from 'react';

const Dashboard = () => {
  // Dummy data for the dashboard
  const urlData = [
    { id: 1, originalUrl: 'https://www.google.com', shortUrl: 'https://short.ly/abc', clicks: 120, status: 'Active' },
    { id: 2, originalUrl: 'https://www.github.com', shortUrl: 'https://short.ly/def', clicks: 85, status: 'Active' },
    { id: 3, originalUrl: 'https://www.youtube.com', shortUrl: 'https://short.ly/ghi', clicks: 250, status: 'Inactive' },
    { id: 4, originalUrl: 'https://www.reactjs.org', shortUrl: 'https://short.ly/jkl', clicks: 180, status: 'Active' },
    { id: 5, originalUrl: 'https://www.stackoverflow.com', shortUrl: 'https://short.ly/mno', clicks: 300, status: 'Active' },
  ];

  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    totalLinks: 5,
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800">{userData.name}</h2>
          <p className="text-gray-600">{userData.email}</p>
          <div className="mt-4">
            <span className="text-lg font-semibold text-gray-700">{userData.totalLinks}</span>
            <span className="text-gray-500"> Total Links Shortened</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {urlData.map((url) => (
            <div key={url.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div className="truncate">
                  <p className="text-gray-500 text-sm">Original URL</p>
                  <a href={url.originalUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline truncate block">{url.originalUrl}</a>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    url.status === 'Active' ? 'text-green-800 bg-green-200' : 'text-red-800 bg-red-200'
                  }`}>
                  {url.status}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-gray-500 text-sm">Short URL</p>
                <a href={url.shortUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{url.shortUrl}</a>
              </div>
              <div className="mt-4">
                <p className="text-gray-500 text-sm">Clicks</p>
                <p className="text-2xl font-bold text-gray-800">{url.clicks}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
