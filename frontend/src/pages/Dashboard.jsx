import React from "react";

import CustomUrlCreator from "../components/CustomUrlCreator";
import UserProfile from "../components/UserProfile";
import AllUrls from "../components/AllUrls";

const Dashboard = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: User Profile */}
          <div className="lg:col-span-1">
            <UserProfile />
          </div>

          {/* Right Column: URL Creator */}
          <div className="lg:col-span-2">
            <CustomUrlCreator />
          </div>
        </div>

        {/* Bottom Section: All URLs */}
        <div className="w-full">
          <AllUrls />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
