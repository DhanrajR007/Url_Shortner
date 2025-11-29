import React from "react";
import UrlShortner from "../components/UrlShortner";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Shorten It!
          </h1>
          <p className="text-slate-400 text-lg max-w-md mx-auto">
            Transform your long URLs into concise, shareable links in seconds.
          </p>
        </div>

        <UrlShortner />
      </div>

      {/* Footer/Credits */}
      <div className="absolute bottom-6 text-center text-slate-600 text-sm">
        <p>&copy; {new Date().getFullYear()} URL Shortener. Premium & Fast.</p>
      </div>
    </div>
  );
};

export default Home;
