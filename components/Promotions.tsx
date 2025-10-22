
import React from 'react';

const Promotions: React.FC = () => {
  return (
    <section className="py-16 bg-[#25292b]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="md:col-span-1 bg-[#33383a] rounded-lg overflow-hidden flex flex-col group">
            <div className="relative h-60">
              <img src="https://picsum.photos/seed/supplements/600/400" alt="Supplements" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold text-[#e91c3a]">PRE-WORKOUT</h3>
              <p className="mt-2 text-gray-400">Unleash your potential with explosive energy and focus.</p>
              <button className="mt-4 px-6 py-2 border-2 border-[#e91c3a] text-[#e91c3a] font-semibold rounded-full hover:bg-[#e91c3a] hover:text-white transition-colors">
                SHOP NOW
              </button>
            </div>
          </div>
          
          <div className="md:col-span-2 bg-[#33383a] rounded-lg overflow-hidden relative flex items-center group">
            <div className="w-full h-full">
              <img src="https://picsum.photos/seed/model/1200/400" alt="Muscular model" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"/>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-80"></div>
            </div>
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center items-start text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold uppercase">Special Sale</h2>
              <p className="mt-2 text-xl text-[#e91c3a] font-semibold">UP TO 40% OFF</p>
              <p className="mt-2 max-w-md text-gray-300">
                Stock up on your favorites and save big. Limited time offer on select products.
              </p>
              <button className="mt-6 px-8 py-3 bg-[#e91c3a] text-white font-bold rounded-full hover:bg-red-700 transition-colors shadow-md">
                VIEW DEALS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
