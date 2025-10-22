
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/athletes/1920/1080"
          alt="Athletes working out"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="relative z-10 p-8">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase leading-tight">
          Sport Nutrition
          <br />
          <span className="text-[#e91c3a]">and Workout Support</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          Fuel your ambition with our premium range of supplements. Get the edge you need to crush your goals.
        </p>
        <button className="mt-8 px-10 py-4 bg-[#e91c3a] text-white font-bold text-lg rounded-full hover:bg-red-700 transition-transform transform hover:scale-105 shadow-lg">
          SEE ALL PRODUCTS
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
