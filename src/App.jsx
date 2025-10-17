import React, { useState } from 'react';
import { Sparkles, ShoppingCart, Menu, X, Heart, Star } from 'lucide-react';

export default function SkincareWebsite() {
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const products = [
    {
      id: 1,
      name: "Radiant Vitamin C Serum",
      description: "Brightening serum with 20% pure vitamin C for glowing skin",
      price: 45.00,
      rating: 4.8,
      gradient: "from-amber-200 to-orange-300"
    },
    {
      id: 2,
      name: "Hydrating Night Cream",
      description: "Rich moisturizer with hyaluronic acid for overnight hydration",
      price: 38.00,
      rating: 4.9,
      gradient: "from-blue-200 to-purple-300"
    },
    {
      id: 3,
      name: "Gentle Cleansing Foam",
      description: "pH-balanced cleanser that removes impurities without stripping",
      price: 28.00,
      rating: 4.7,
      gradient: "from-pink-200 to-rose-300"
    },
    {
      id: 4,
      name: "Retinol Recovery Cream",
      description: "Anti-aging formula with encapsulated retinol and peptides",
      price: 52.00,
      rating: 4.9,
      gradient: "from-purple-200 to-indigo-300"
    },
    {
      id: 5,
      name: "Luminous Eye Serum",
      description: "Brightening treatment for dark circles and fine lines",
      price: 35.00,
      rating: 4.6,
      gradient: "from-teal-200 to-cyan-300"
    },
    {
      id: 6,
      name: "Rose Hydrating Mist",
      description: "Refreshing facial mist with rose water and botanical extracts",
      price: 24.00,
      rating: 4.8,
      gradient: "from-red-200 to-pink-300"
    }
  ];

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Radiant Glow
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
              <a href="#products" className="text-gray-700 hover:text-purple-600 transition-colors">Products</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 hover:bg-purple-100 rounded-full transition-colors">
                <ShoppingCart className="w-6 h-6 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button 
                className="md:hidden p-2"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#" className="block text-gray-700 hover:text-purple-600">Home</a>
              <a href="#products" className="block text-gray-700 hover:text-purple-600">Products</a>
              <a href="#" className="block text-gray-700 hover:text-purple-600">About</a>
              <a href="#" className="block text-gray-700 hover:text-purple-600">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
            Discover Your Natural Radiance
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Premium skincare products crafted with natural ingredients for healthy, glowing skin
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Shop Collection
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Natural Ingredients", desc: "100% organic and cruelty-free" },
            { title: "Clinically Tested", desc: "Dermatologist approved formulas" },
            { title: "Free Shipping", desc: "On orders over $50" }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-purple-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
            Our Bestsellers
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Handpicked products loved by thousands of women
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group"
              >
                <div className={`h-64 bg-gradient-to-br ${product.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                  >
                    <Heart 
                      className={`w-6 h-6 ${favorites.includes(product.id) ? 'fill-pink-500 text-pink-500' : 'text-gray-600'}`}
                    />
                  </button>
                  <div className="text-8xl opacity-20 group-hover:scale-110 transition-transform duration-300">
                    ✨
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-purple-600">
                      ${product.price.toFixed(2)}
                    </span>
                    <button 
                      onClick={addToCart}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-8 h-8" />
            <span className="text-2xl font-bold">Radiant Glow</span>
          </div>
          <p className="text-purple-200 mb-6">
            Elevate your skincare routine with our premium collection
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="hover:text-pink-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-pink-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-pink-300 transition-colors">Contact Us</a>
          </div>
          <p className="mt-6 text-purple-300 text-sm">
            © 2025 Radiant Glow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
