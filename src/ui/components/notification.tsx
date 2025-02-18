import type React from "react";

export const Notification: React.FC = () => (
  <div className="fixed w-max h-max py-2 px-4 border border-woodsmoke-800 rounded-lg bg-woodsmoke-800 shadow-md top-5 right-10">
      <div className="absolute top-0 right-0 -mt-1 -mr-1">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
        </span>
      </div>
      <span className="text-sm font-medium tracking-wide">Under construction...</span>
    </div>
)