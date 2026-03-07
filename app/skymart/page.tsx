'use client';

import { useState } from 'react';
import AlternatingVideoBackground from '@/components/AlternatingVideoBackground'; 

export default function SkyMartPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Space Explorer Board Game',
      price: 15000,
      category: 'games',
      image: '🎲',
      rating: 4.8,
      inStock: true
    },
    {
      id: 2,
      name: 'Build Your Rocket Kit',
      price: 25000,
      category: 'kits',
      image: '🚀',
      rating: 4.9,
      inStock: true
    },
    {
      id: 3,
      name: 'African Constellations Poster',
      price: 5000,
      category: 'art',
      image: '🖼️',
      rating: 4.7,
      inStock: true
    },
    {
      id: 4,
      name: 'Protoverse T-Shirt',
      price: 8000,
      category: 'apparel',
      image: '👕',
      rating: 4.6,
      inStock: true
    },
    {
      id: 5,
      name: 'Junior Scientist Lab Kit',
      price: 35000,
      category: 'kits',
      image: '🔬',
      rating: 5.0,
      inStock: true
    },
    {
      id: 6,
      name: 'Coding for Kids Book',
      price: 12000,
      category: 'books',
      image: '📚',
      rating: 4.8,
      inStock: false
    },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <>
      <AlternatingVideoBackground 
              videos={[
          '/video3.mp4',
          '/video4.mp4',
          '/video5.mp4',
          '/video6.mp4',
          '/video8.mp4',
          '/video9.mp4',
          '/video10.mp4',
          '/video11.mp4',
          '/video12.mp4',
          '/video13.mp4',
          '/video14.mp4',
          '/video15.mp4',
          '/video16.mp4',         
          '/video_homepage.mp4',
          '/Futuristic_African_Child_Astronaut_Video.mp4',
          '/bg2.mp4',              ]}
              interval={5000} // Switch every 30 seconds
            />

      {/* Dark overlay for readability - Fixed to viewport */}
      <div className="fixed inset-0 bg-black/60 z-10" />

      {/* All content sits above the video */}
      <main className="min-h-screen relative z-20">
        {/* Hero */}
        <section className="bg-gradient-to-r from-nebula-blue/50 to-stellar-purple/50 backdrop-blur-sm text-protoverse-white py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              SkyMart
            </h1>
            <p className="text-2xl mb-8 text-protoverse-white/90">
              Where Innovation Meets Play
            </p>
            <p className="text-lg text-protoverse-white/90 max-w-3xl mx-auto">
              Discover board games, STEM kits, artworks, and merchandise that inspire the next generation of innovators
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-black/40 backdrop-blur-sm py-8 px-4 border-b border-quantum-cyan/20 sticky top-16 z-40">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { id: 'all', label: 'All Products', icon: '🛍️' },
                { id: 'games', label: 'Board Games', icon: '🎲' },
                { id: 'kits', label: 'STEM Kits', icon: '🔧' },
                { id: 'art', label: 'Artworks', icon: '🎨' },
                { id: 'apparel', label: 'Apparel', icon: '👕' },
                { id: 'books', label: 'Books', icon: '📚' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2 rounded-lg font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-nebula-blue text-protoverse-white shadow-lg shadow-nebula-blue/50'
                      : 'glass-effect text-protoverse-white hover:bg-quantum-cyan/20'
                  }`}
                >
                  {cat.icon} {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-4 bg-black/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="glass-effect rounded-xl overflow-hidden hover:neon-border-cyan transition-all group"
                >
                  {/* Product Image */}
                  <div className="bg-gradient-to-br from-quantum-cyan/60 to-nebula-blue/60 backdrop-blur-md h-64 flex items-center justify-center text-9xl group-hover:scale-105 transition-transform">
                    {product.image}
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        product.inStock 
                          ? 'bg-green-500/30 text-green-300 border border-green-400/50' 
                          : 'bg-red-500/30 text-red-300 border border-red-400/50'
                      }`}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                      <div className="flex items-center text-sm text-yellow-400">
                        ⭐ {product.rating}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-protoverse-white mb-3">{product.name}</h3>
                    
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-2xl font-bold text-quantum-cyan">
                        ₦{product.price.toLocaleString()}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <button className="w-full bg-nebula-blue text-protoverse-white py-3 rounded-lg font-semibold hover:bg-quantum-cyan hover:scale-105 transition-all">
                        Add to Cart
                      </button>
                      <button className="w-full glass-effect text-protoverse-white py-3 rounded-lg font-semibold hover:bg-protoverse-white/20 transition-all">
                        Quick View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4 bg-black/40 backdrop-blur-sm text-protoverse-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { icon: '🚚', title: 'Free Shipping', desc: 'On orders over ₦50,000' },
                { icon: '🔒', title: 'Secure Payment', desc: 'Stripe protected' },
                { icon: '↩️', title: 'Easy Returns', desc: '30-day return policy' },
                { icon: '🎁', title: 'Gift Wrapping', desc: 'Available at checkout' },
              ].map((feature, index) => (
                <div key={index} className="glass-effect p-6 rounded-xl hover:neon-border-cyan transition-all group">
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{feature.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-protoverse-white/70 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}