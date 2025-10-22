
import React, { useState, useEffect } from 'react';

const DealsOfTheDay: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date().setHours(24, 0, 0, 0) - +new Date();
    let timeLeft: { hours?: number; minutes?: number; seconds?: number } = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  // FIX: Refactored to use .map for a cleaner, more idiomatic approach.
  // This resolves the 'Cannot find namespace JSX' error by creating React.ReactElement[] directly,
  // and also fixes latent bugs:
  // 1. Incorrectly handling a countdown value of 0.
  // 2. An attempt to mutate state directly.
  // 3. Type errors that were suppressed with @ts-ignore.
  const timerComponents = (Object.keys(timeLeft) as Array<keyof typeof timeLeft>).map((interval) => {
    const value = timeLeft[interval] ?? 0;
    return (
      <div key={interval} className="text-center">
        <span className="text-4xl md:text-6xl font-bold text-[#e91c3a]">
            {String(value).padStart(2, '0')}
        </span>
        <span className="block text-sm uppercase text-gray-400">{interval}</span>
      </div>
    );
  });


  return (
    <section className="py-20 bg-[#33383a]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase">
              Deals <span className="text-[#e91c3a]">of the Day</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Get our best muscle building protein powders at an unbeatable price. This offer ends soon!
            </p>
            <div className="flex justify-center lg:justify-start space-x-4 md:space-x-8 mt-8">
              {timerComponents.length ? timerComponents : <span>Time's up!</span>}
            </div>
            <button className="mt-10 px-10 py-4 bg-[#e91c3a] text-white font-bold text-lg rounded-full hover:bg-red-700 transition-transform transform hover:scale-105 shadow-lg">
              SHOP NOW
            </button>
          </div>
          <div className="flex justify-center">
            <img src="https://picsum.photos/seed/dealprotein/500/500" alt="Protein Powder Deal" className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsOfTheDay;
