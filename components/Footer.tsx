import React from 'react';
import FacebookIcon from './icons/FacebookIcon';
import TwitterIcon from './icons/TwitterIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import InstagramIcon from './icons/InstagramIcon';
import GooglePlusIcon from './icons/GooglePlusIcon';
import YoutubeIcon from './icons/YoutubeIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#25292b] text-gray-400">
      <div className="container mx-auto px-4 pt-16">
        {/* Top Section: Brands & Guarantees */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center pb-12 border-b border-gray-800">
          <div>
            <h4 className="font-bold text-white mb-2">TOP BRANDS</h4>
            <p className="text-sm">Optimum Nutrition, BSN, MuscleTech</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">SATISFACTION GUARANTEED</h4>
            <p className="text-sm">Money back guarantee</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">FAST SHIPPING</h4>
            <p className="text-sm">On all orders over $50</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">CUSTOMER SUPPORT</h4>
            <p className="text-sm">Mon-Fri 9am-5pm EST</p>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div>
            <h5 className="font-bold text-lg text-white mb-4">ABOUT US</h5>
            <p className="mb-4">Your one-stop shop for sports nutrition and workout support. We're committed to helping you achieve your fitness goals.</p>
            <p><span className="font-semibold text-gray-300">Email:</span> support@suppfactory.com</p>
            <p><span className="font-semibold text-gray-300">Phone:</span> +212 695-700773</p>
          </div>
          <div>
            <h5 className="font-bold text-lg text-white mb-4">CATEGORIES</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#e91c3a]">Protein</a></li>
              <li><a href="#" className="hover:text-[#e91c3a]">Pre-Workout</a></li>
              <li><a href="#" className="hover:text-[#e91c3a]">Vitamins & Health</a></li>
              <li><a href="#" className="hover:text-[#e91c3a]">Weight Loss</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-lg text-white mb-4">BRANDS</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#e91c3a]">Optimum Nutrition</a></li>
              <li><a href="#" className="hover:text-[#e91c3a]">Jym Supplement Science</a></li>
              <li><a href="#" className="hover:text-[#e91c3a]">Cellucor</a></li>
              <li><a href="#" className="hover:text-[#e91c3a]">BSN</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-lg text-white mb-4">NEWSLETTER</h5>
            <p className="mb-4">Subscribe to our newsletter for the latest deals and workout tips.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="w-full bg-gray-800 border border-gray-700 rounded-l-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#e91c3a]" />
              <button type="submit" className="bg-[#e91c3a] text-white font-bold px-4 rounded-r-md hover:bg-red-700">Go</button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar: Copyright & Social Links */}
      <div className="bg-black py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} SuppFactory. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-[#e91c3a]"><FacebookIcon /></a>
            <a href="#" className="hover:text-[#e91c3a]"><TwitterIcon /></a>
            <a href="#" className="hover:text-[#e91c3a]"><LinkedInIcon /></a>
            <a href="#" className="hover:text-[#e91c3a]"><InstagramIcon /></a>
            <a href="#" className="hover:text-[#e91c3a]"><GooglePlusIcon /></a>
            <a href="#" className="hover:text-[#e91c3a]"><YoutubeIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
