"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const releaseDate = new Date("2025-09-25T12:00:00+03:00");
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
    <main
      className="relative h-screen w-full flex flex-col items-center justify-center text-center text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1576858574144-9ae1ebcf5ae5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide mb-3 drop-shadow-lg">
          Endurance Ro-Index 2025
        </h1>
        <p className="text-lg md:text-xl drop-shadow-lg mb-5">
          Data lansarii: Joi, 25 Septembrie 2025
        </p>
        <div className="text-2xl md:text-4xl bg-black/30 px-6 py-4 rounded-2xl">
          {timeLeft || "Loading..."}
        </div>
      </div>
    </main>
  );
}
