'use client';

import { useState } from 'react';

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
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-nebula-blue to-stellar-purple text-protoverse-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            SkyMart
          </h1>
          <p className="text-2xl mb-8">
            Where Innovation Meets Play
          </p>
          <p className="text-lg text-protoverse-white/90 max-w-3xl mx-auto">
            Discover board games, STEM kits, artworks, and merchandise that inspire the next generation of innovators
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-protoverse-white py-8 px-4 border-b sticky top-16 z-40">
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
                    ? 'bg-nebula-blue text-protoverse-white'
                    : 'bg-gray-100 text-deep-space hover:bg-gray-200'
                }`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-protoverse-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                {/* Product Image */}
                <div className="bg-gradient-to-br from-quantum-cyan to-nebula-blue h-64 flex items-center justify-center text-9xl group-hover:scale-105 transition-transform">
                  {product.image}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.inStock 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                    <div className="flex items-center text-sm text-yellow-500">
                      ⭐ {product.rating}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-deep-space mb-3">{product.name}</h3>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-nebula-blue">
                      ₦{product.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="mt-4 space-y-2">
                    <button className="w-full bg-nebula-blue text-protoverse-white py-3 rounded-lg font-semibold hover:bg-quantum-cyan hover:text-void-black transition-all">
                      Add to Cart
                    </button>
                    <button className="w-full bg-gray-100 text-deep-space py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all">
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
      <section className="py-20 px-4 bg-deep-space text-protoverse-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: '🚚', title: 'Free Shipping', desc: 'On orders over ₦50,000' },
              { icon: '🔒', title: 'Secure Payment', desc: 'Stripe protected' },
              { icon: '↩️', title: 'Easy Returns', desc: '30-day return policy' },
              { icon: '🎁', title: 'Gift Wrapping', desc: 'Available at checkout' },
            ].map((feature, index) => (
              <div key={index}>
                <div className="text-5xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-protoverse-white/70 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
