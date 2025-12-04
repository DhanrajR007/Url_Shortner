import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        <div className="mt-4">
          <span className="text-lg font-semibold text-gray-700">
            {user.totalLinks}
          </span>
          <span className="text-gray-500"> Total Links Shortened</span>
        </div>
      </div>
      <div>
        <img src={user.avatar} alt="" />
      </div>
    </div>
  );
};

export default UserProfile;
