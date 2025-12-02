import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const Auth = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  const toggleView = () => {
    setIsLoginView(!isLoginView);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        {isLoginView ? <Login /> : <Register />}

        <p className="text-center text-slate-400 mt-6">
          {isLoginView ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={toggleView}
            className="font-semibold text-indigo-400 hover:text-indigo-300 ml-2 focus:outline-none transition-colors"
          >
            {isLoginView ? "Register" : "Login"}
          </button>
        </p>
      </div>
       {/* Footer/Credits */}
       <div className="absolute bottom-6 text-center text-slate-600 text-sm">
       <p>&copy; {new Date().getFullYear()} URL Shortener. Premium & Fast.</p>
     </div>
    </div>
  );
};

export default Auth;
