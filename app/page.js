"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const releaseDate = new Date("2025-09-23T00:00:00+03:00");
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const diff = releaseDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("Released!");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="h-screen w-full flex flex-col items-center justify-center text-center text-white bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-[length:800%_800%] animate-gradient">
      <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide mb-8 drop-shadow-lg">
        Endurance Ro-Index 2025
      </h1>
      <div className="text-2xl md:text-4xl bg-black/30 px-6 py-4 rounded-2xl">
        {timeLeft || "Loading..."}
      </div>
    </main>
  );
}
