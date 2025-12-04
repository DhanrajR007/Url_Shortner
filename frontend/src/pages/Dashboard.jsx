import React from "react";

import CustomUrlCreator from "../components/CustomUrlCreator";
import UserProfile from "../components/UserProfile";
import AllUrls from "../components/AllUrls";

const Dashboard = () => {
  // Dummy data for the dashboard
  const urlData = [
    {
      id: 1,
      originalUrl: "https://www.google.com",
      shortUrl: "https://short.ly/abc",
      clicks: 120,
      status: "Active",
    },
    {
      id: 2,
      originalUrl: "https://www.github.com",
      shortUrl: "https://short.ly/def",
      clicks: 85,
      status: "Active",
    },
    {
      id: 3,
      originalUrl: "https://www.youtube.com",
      shortUrl: "https://short.ly/ghi",
      clicks: 250,
      status: "Inactive",
    },
    {
      id: 4,
      originalUrl: "https://www.reactjs.org",
      shortUrl: "https://short.ly/jkl",
      clicks: 180,
      status: "Active",
    },
    {
      id: 5,
      originalUrl: "https://www.stackoverflow.com",
      shortUrl: "https://short.ly/mno",
      clicks: 300,
      status: "Active",
    },
  ];

  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    totalLinks: 5,
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <UserProfile userData={userData} />

        <CustomUrlCreator />

        <AllUrls urlData={urlData} />
      </div>
    </div>
  );
};

export default Dashboard;
