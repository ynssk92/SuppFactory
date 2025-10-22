
import React from 'react';

const WorkoutArticles: React.FC = () => {
  return (
    <section className="py-16 bg-[#25292b]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12">LATEST WORKOUT ARTICLES</h2>
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="lg:w-2/3 bg-[#33383a] rounded-lg overflow-hidden group flex flex-col md:flex-row">
            <div className="md:w-1/2">
                <img src="https://picsum.photos/seed/legday/800/600" alt="Dorian Yates leg day" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-8 md:p-10 md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl lg:text-3xl font-bold leading-tight text-[#e91c3a]">
                THERE'S LEG DAY.
                <br />
                THEN THERE'S DORIAN YATES' LEG DAY.
              </h3>
              <p className="mt-4 text-gray-400">
                Dive deep into the high-intensity training that built one of the greatest physiques in bodybuilding history. Not for the faint of heart.
              </p>
              <button className="mt-6 self-start px-6 py-2 border-2 border-[#e91c3a] text-[#e91c3a] font-semibold rounded-full hover:bg-[#e91c3a] hover:text-white transition-colors">
                READ MORE
              </button>
            </div>
          </div>
          <div className="lg:w-1/3 flex flex-col gap-8">
            <div className="bg-[#33383a] rounded-lg p-6 flex items-center space-x-4 hover:bg-[#44494b] transition-colors cursor-pointer">
              <img src="https://picsum.photos/seed/nutrition/150/150" alt="Nutrition article" className="w-24 h-24 object-cover rounded-md flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Top 5 Supplements for Muscle Growth</h4>
                <p className="text-sm text-gray-400 mt-1">Unlock your gains with these essential supps.</p>
              </div>
            </div>
            <div className="bg-[#33383a] rounded-lg p-6 flex items-center space-x-4 hover:bg-[#44494b] transition-colors cursor-pointer">
              <img src="https://picsum.photos/seed/cardio/150/150" alt="Cardio article" className="w-24 h-24 object-cover rounded-md flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg">HIIT vs. LISS: Which Cardio is Best for You?</h4>
                <p className="text-sm text-gray-400 mt-1">We break down the pros and cons of each.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutArticles;
