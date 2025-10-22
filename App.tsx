
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Promotions from './components/Promotions';
import ProductShowcase from './components/ProductShowcase';
import DealsOfTheDay from './components/DealsOfTheDay';
import WorkoutArticles from './components/WorkoutArticles';
import Categories from './components/Categories';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#25292b] text-white font-sans">
      <Header />
      <main>
        <HeroSection />
        <Promotions />
        <ProductShowcase />
        <DealsOfTheDay />
        <WorkoutArticles />
        <Categories />
      </main>
      <Footer />
    </div>
  );
};

export default App;
