import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { user } = useSelector((state) => state.auth);
  const { urls } = useSelector((state) => state.urls);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col justify-center items-center text-center">
      <div className="mb-2 relative">
        <div className="p-1 bg-linear-to-tr from-blue-500 to-purple-500 rounded-full">
          <img
            src={user.avatar || "https://via.placeholder.com/150"}
            alt={user.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-800"
          />
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
        {user.name}
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        {user.email}
      </p>

      <div className="w-full bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 flex items-center justify-between border border-gray-100 dark:border-gray-700">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
          Total Links
        </span>
        <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
          {urls.length}
        </span>
      </div>
    </div>
  );
};

export default UserProfile;
