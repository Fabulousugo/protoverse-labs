'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiShoppingCart } from 'react-icons/hi';
import { useCartStore } from '@/lib/store/cart';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Protoverse', href: '/about' },
  { name: 'Sky Academy', href: '/sky-academy' },
  { name: 'AfroSpace Adventurers', href: '/afrospace' },
  { name: 'Programs & Events', href: '/programs-events' },
  { name: 'Knowledge Hub', href: '/blog' },
  { name: 'SkyMart', href: '/skymart' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItemCount = useCartStore((state) => state.items.length);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-void-black/90 backdrop-blur-lg border-b border-quantum-cyan/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="gradient-text">PROTOVERSE</span>
              <span className="text-quantum-cyan ml-1">LABS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-protoverse-white/80 hover:text-quantum-cyan transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Cart & CTA */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <Link
              href="/cart"
              className="relative p-2 text-protoverse-white hover:text-quantum-cyan transition-colors"
            >
              <HiShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-stellar-purple text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* CTA Button */}
            <Link
              href="/community"
              className="hidden md:block btn-primary text-sm"
            >
              Join Community
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-protoverse-white"
            >
              {isMobileMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-protoverse-white/80 hover:text-quantum-cyan hover:bg-deep-space rounded-lg transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/community"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block mx-4 text-center btn-primary"
                >
                  Join Community
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
