import React from 'react';
import PhoneIcon from './icons/PhoneIcon';
import MailIcon from './icons/MailIcon';
import SearchIcon from './icons/SearchIcon';
import CartIcon from './icons/CartIcon';

const Header: React.FC = () => {
  return (
    <header className="bg-[#25292b] sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#33383a] text-gray-400 text-xs">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <PhoneIcon className="h-4 w-4" />
              <span>+212 695-700773</span>
            </div>
            <div className="flex items-center space-x-1">
              <MailIcon className="h-4 w-4" />
              <span>support@suppfactory.com</span>
            </div>
          </div>
          <div>
            <span>Free shipping on all orders over $50</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold tracking-wider text-[#e91c3a]">
            SUPPFACTORY
          </div>
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full bg-[#33383a] border border-gray-700 rounded-full py-2 pl-5 pr-12 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#e91c3a]"
              />
              <button className="absolute right-0 top-0 mt-2 mr-3 text-gray-400 hover:text-white">
                <SearchIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Login</a>
            <div className="relative cursor-pointer group">
              <CartIcon className="h-7 w-7 text-gray-300 group-hover:text-white transition-colors" />
              <span className="absolute -top-2 -right-2 bg-[#e91c3a] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
