'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AlternatingVideoBackground from '@/components/AlternatingVideoBackground';

type Category = 'all' | 'games' | 'kits' | 'art' | 'apparel' | 'books';

type Product = {
  id: number;
  name: string;
  price: number;
  category: Exclude<Category, 'all'>;
  image: string;
  rating: number;
  inStock: boolean;
  tag: string;
};

const allProducts: Product[] = [
  { id: 1, name: 'Space Explorer Board Game', price: 15000, category: 'games', image: '🎲', rating: 4.8, inStock: true, tag: 'Best for Family' },
  { id: 2, name: 'Build Your Rocket Kit', price: 25000, category: 'kits', image: '🚀', rating: 4.9, inStock: true, tag: 'Hands-On' },
  { id: 3, name: 'African Constellations Poster', price: 5000, category: 'art', image: '🖼️', rating: 4.7, inStock: true, tag: 'Room Decor' },
  { id: 4, name: 'Protoverse T-Shirt', price: 8000, category: 'apparel', image: '👕', rating: 4.6, inStock: true, tag: 'Collector' },
  { id: 5, name: 'Junior Scientist Lab Kit', price: 35000, category: 'kits', image: '🔬', rating: 5.0, inStock: true, tag: 'Top Rated' },
  { id: 6, name: 'Coding for Kids Book', price: 12000, category: 'books', image: '📚', rating: 4.8, inStock: false, tag: 'Restocking' },
  { id: 7, name: 'Lunar Surface Rover', price: 42000, category: 'games', image: '🏎️', rating: 4.9, inStock: true, tag: 'Remote Control' },
  { id: 8, name: 'Nebula Night Projector', price: 18000, category: 'art', image: '🌌', rating: 4.5, inStock: true, tag: 'Best Seller' },
  { id: 9, name: 'Anti-Gravity Hoodie', price: 22000, category: 'apparel', image: '🧥', rating: 4.7, inStock: true, tag: 'Limited Drop' },
  { id: 10, name: 'Solar System VR Set', price: 55000, category: 'kits', image: '🥽', rating: 5.0, inStock: true, tag: 'Ultra Immersive' },
  { id: 11, name: 'The Martian Garden', price: 9000, category: 'kits', image: '🌱', rating: 4.4, inStock: true, tag: 'Bio-Science' },
  { id: 12, name: 'Astro-Journal: 2045', price: 6500, category: 'books', image: '📓', rating: 4.9, inStock: true, tag: 'Daily Mission' },
  { id: 13, name: 'Interstellar Chess', price: 28000, category: 'games', image: '♟️', rating: 4.8, inStock: true, tag: 'Grandmaster' },
  { id: 14, name: 'Gravity-Defying Pen', price: 11000, category: 'art', image: '🖊️', rating: 4.6, inStock: true, tag: 'Tech-Art' },
  { id: 15, name: 'Satellite Link Watch', price: 31000, category: 'apparel', image: '⌚', rating: 4.7, inStock: false, tag: 'Sold Out' },
];

const categories: { id: Category; label: string; icon: string }[] = [
  { id: 'all', label: 'All Gear', icon: '🌌' },
  { id: 'games', label: 'Games', icon: '🎲' },
  { id: 'kits', label: 'STEM', icon: '🧪' },
  { id: 'art', label: 'Visuals', icon: '🎨' },
  { id: 'apparel', label: 'Wear', icon: '👕' },
  { id: 'books', label: 'Intel', icon: '📚' },
];

export default function SkyMartPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);

  useEffect(() => {
    const shuffleArray = (array: Product[]): Product[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    const filtered =
      selectedCategory === 'all'
        ? allProducts
        : allProducts.filter((p) => p.category === selectedCategory);

    setDisplayProducts(
      selectedCategory === 'all' ? shuffleArray(filtered) : filtered
    );
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#050816] text-slate-200">
      <AlternatingVideoBackground
        videos={['/video_homepage.mp4', '/bg2.mp4', '/video15.mp4']}
        interval={10000}
      />

      <div className="pointer-events-none fixed inset-0 z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_35%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/20 via-[#050816]/65 to-[#050816]" />
      </div>

      <main className="relative z-20">
        <section className="px-6 pb-14 pt-24 text-center md:pt-28">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-4 text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            SKY<span className="text-cyan-400">MART</span>
          </motion.h1>

          <p className="mx-auto max-w-xl text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
            Sector 7-G Supply Manifest
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
            Premium toys, STEM kits, apparel, and cosmic collectibles designed
            to make learning feel like an adventure.
          </p>
        </section>

        <nav className="sticky top-0 z-50 border-y border-white/10 bg-[#050816]/70 py-4 backdrop-blur-xl">
          <div className="no-scrollbar mx-auto flex max-w-7xl justify-start gap-3 overflow-x-auto px-6 md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'border border-cyan-300/30 bg-white text-slate-950 shadow-[0_10px_40px_rgba(255,255,255,0.08)]'
                    : 'border border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/[0.07]'
                }`}
              >
                <span className="text-sm">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </nav>

        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {displayProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.35 }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_12px_50px_rgba(0,0,0,0.28)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-[#060b18]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_38%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.28))]" />

                    <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                      ★ {product.rating}
                    </div>

                    <span className="relative z-10 text-8xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      {product.image}
                    </span>

                    <div className="absolute bottom-4 left-4">
                      <span className="rounded-full border border-cyan-300/15 bg-cyan-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-cyan-200">
                        {product.tag}
                      </span>
                    </div>
                  </div>

                  <div className="flex min-h-[220px] flex-col p-6">
                    <span className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                      {product.category}
                    </span>

                    <h3 className="mb-4 text-lg font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-cyan-100">
                      {product.name}
                    </h3>

                    <div className="mt-auto flex items-end justify-between gap-4">
                      <div>
                        <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-slate-500">
                          Price
                        </p>
                        <p className="text-2xl font-bold tracking-tight text-white">
                          ₦{product.price.toLocaleString()}
                        </p>
                      </div>

                      <button
                        disabled={!product.inStock}
                        className={`rounded-2xl px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                          product.inStock
                            ? 'bg-white text-slate-950 hover:bg-cyan-300'
                            : 'cursor-not-allowed border border-white/10 bg-white/5 text-slate-500'
                        }`}
                      >
                        {product.inStock ? 'Add to Cart' : 'Sold Out'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-28">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.24)] backdrop-blur-md md:p-10">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Membership
              </p>
              <h4 className="mb-3 text-2xl font-semibold tracking-tight text-white">
                Join the Fleet
              </h4>
              <p className="mb-6 max-w-md text-sm leading-7 text-slate-300">
                Get first access to new drops, limited releases, and exclusive
                educational bundles.
              </p>
              <button className="rounded-full border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-slate-950">
                Get Early Access
              </button>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.24)] backdrop-blur-md md:p-10">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-purple-300">
                Support
              </p>
              <h4 className="mb-3 text-2xl font-semibold tracking-tight text-white">
                Support Center
              </h4>
              <p className="mb-6 max-w-md text-sm leading-7 text-slate-300">
                Need help with orders, sizing, or product recommendations? Our
                team is ready to help.
              </p>
              <button className="rounded-full border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-slate-950">
                Contact Support
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}