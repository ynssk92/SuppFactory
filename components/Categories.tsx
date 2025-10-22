
import React from 'react';

const categories = [
  { name: 'BUILDING MUSCLE', image: 'https://picsum.photos/seed/muscle/500/500' },
  { name: 'INCREASING ENERGY', image: 'https://picsum.photos/seed/energy/500/500' },
  { name: 'IMPROVING WORKOUT', image: 'https://picsum.photos/seed/workout/500/500' },
  { name: 'LOSING FAT', image: 'https://picsum.photos/seed/fatloss/500/500' },
];

const CategoryCard: React.FC<{ category: typeof categories[0] }> = ({ category }) => (
  <div className="relative rounded-lg overflow-hidden group cursor-pointer shadow-lg">
    <img src={category.image} alt={category.name} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
    <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-opacity flex items-center justify-center">
      <h3 className="text-2xl font-extrabold text-white text-center uppercase tracking-wider p-4 border-2 border-white">
        {category.name}
      </h3>
    </div>
  </div>
);

const Categories: React.FC = () => {
  return (
    <section className="py-16 bg-[#33383a]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(category => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
