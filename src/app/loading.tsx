"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Loading");

  useEffect(() => {
    // Simulate progress
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        const newProgress = Math.min(oldProgress + Math.random() * 20, 90);
        return newProgress;
      });
    }, 500);

    // Update loading text with dots animation
    const textTimer = setInterval(() => {
      setLoadingText(text => (text === "Loading..." ? "Loading" : text + "."));
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(textTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />

      <div className="z-10 flex flex-col items-center space-y-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />

        <div className="bg-gray-200 w-64 overflow-hidden rounded-full">
          <div className="h-2 rounded-full bg-blue-500 transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
        </div>

        <div className="text-gray-700 text-lg font-medium">{loadingText}</div>
      </div>
    </div>
  );
}
