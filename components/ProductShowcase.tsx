import React, { useState, useEffect } from 'react';
import HeartIcon from './icons/HeartIcon';

const products = [
  { id: 1, name: 'Whey Protein Isolate', price: '$59.99', image: 'https://picsum.photos/seed/protein1/400/400' },
  { id: 2, name: 'Creatine Monohydrate', price: '$24.99', image: 'https://picsum.photos/seed/creatine/400/400' },
  { id: 3, name: 'BCAA Amino Acids', price: '$32.50', image: 'https://picsum.photos/seed/bcaa/400/400' },
  { id: 4, name: 'Mass Gainer Blend', price: '$65.00', image: 'https://picsum.photos/seed/gainer/400/400' },
];

const WISHLIST_KEY = 'suppfactory_wishlist';

const getWishlist = (): number[] => {
  try {
    const wishlist = localStorage.getItem(WISHLIST_KEY);
    return wishlist ? JSON.parse(wishlist) : [];
  } catch (error) {
    console.error("Error reading wishlist from localStorage", error);
    return [];
  }
};

const saveWishlist = (wishlist: number[]): void => {
  try {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  } catch (error) {
    console.error("Error saving wishlist to localStorage", error);
  }
};


const ProductCard: React.FC<{ product: typeof products[0] }> = ({ product }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const wishlist = getWishlist();
    setIsInWishlist(wishlist.includes(product.id));
  }, [product.id]);

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click events if any
    const currentWishlist = getWishlist();
    const isCurrentlyInWishlist = currentWishlist.includes(product.id);
    let updatedWishlist;

    if (isCurrentlyInWishlist) {
      updatedWishlist = currentWishlist.filter(id => id !== product.id);
    } else {
      updatedWishlist = [...currentWishlist, product.id];
    }
    
    saveWishlist(updatedWishlist);
    setIsInWishlist(!isCurrentlyInWishlist);
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  return (
    <div className="bg-[#33383a] rounded-lg overflow-hidden group text-center border border-gray-700 hover:border-[#e91c3a] transition-all duration-300">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-opacity"></div>
        <button
          onClick={handleToggleWishlist}
          className="absolute top-3 right-3 bg-gray-900 bg-opacity-50 p-2 rounded-full text-white hover:bg-[#e91c3a] hover:text-white transition-all duration-300 focus:outline-none"
          aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <HeartIcon
            className={`h-6 w-6 transition-colors ${
              isInWishlist ? 'text-[#e91c3a] fill-current' : 'text-white'
            }`}
          />
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 h-16">{product.name}</h3>
        <p className="text-2xl font-bold text-[#e91c3a] mb-4">{product.price}</p>
        <div className="flex items-stretch gap-2">
          <select
            value={quantity}
            onChange={handleQuantityChange}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#44494b] text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e91c3a] hover:bg-gray-600 transition-colors"
            aria-label="Quantity"
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <button className="flex-1 bg-[#44494b] text-white font-bold py-3 rounded-lg hover:bg-[#e91c3a] transition-colors transform group-hover:scale-105">
            ADD {quantity} TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-[#25292b]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12">POPULAR SUPPLEMENTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
