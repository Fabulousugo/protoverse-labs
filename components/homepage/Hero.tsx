'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  HiAcademicCap, 
  HiLightningBolt, 
  HiGlobeAlt, 
  HiUserGroup, 
  HiSparkles 
} from 'react-icons/hi';

const quickNavItems = [
  {
    title: 'Explore Space Education',
    icon: HiAcademicCap,
    href: '/sky-academy',
    color: 'from-quantum-cyan to-nebula-blue',
  },
  {
    title: 'R&D Prototyping',
    icon: HiLightningBolt,
    href: '/consultancy',
    color: 'from-stellar-purple to-nebula-blue',
  },
  {
    title: 'Space Events & Experiences',
    icon: HiSparkles,
    href: '/programs-events',
    color: 'from-solar-gold to-nebula-blue',
  },
  {
    title: 'Partner with Us',
    icon: HiGlobeAlt,
    href: '/partnerships',
    color: 'from-hologram-teal to-quantum-cyan',
  },
  {
    title: 'Join our Space Community',
    icon: HiUserGroup,
    href: '/community',
    color: 'from-nebula-blue to-stellar-purple',
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-void-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-space/50 to-void-black z-10" />
        
        {/* Stars Background */}
        <div className="absolute inset-0 opacity-50">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>

        {/* Holographic Grid */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: `
                linear-gradient(#5DF0DE 1px, transparent 1px),
                linear-gradient(90deg, #5DF0DE 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom text-center pt-32 pb-20">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-xl mb-6">
            <span className="block text-protoverse-white">PROTOVERSE LABS</span>
            <span className="block gradient-text text-glow mt-2">
              Innovation Without Limits
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-protoverse-white/80 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Where Space Science meets Artificial Intelligence, and Africa's future 
          innovators are born.
        </motion.p>

        {/* Quick Navigation Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-16"
        >
          {quickNavItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <Link
                href={item.href}
                className="group block p-6 glass-card glass-card-hover rounded-xl h-full"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color}`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-protoverse-white group-hover:text-quantum-cyan transition-colors">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-quantum-cyan"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* CSS for stars animation */}
      <style jsx>{`
        .stars {
          width: 1px;
          height: 1px;
          background: transparent;
          box-shadow: 
            ${Array.from({ length: 200 }, () => 
              `${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`
            ).join(', ')};
          animation: animStar 50s linear infinite;
        }
        
        .stars2 {
          width: 2px;
          height: 2px;
          background: transparent;
          box-shadow: 
            ${Array.from({ length: 100 }, () => 
              `${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`
            ).join(', ')};
          animation: animStar 100s linear infinite;
        }
        
        .stars3 {
          width: 3px;
          height: 3px;
          background: transparent;
          box-shadow: 
            ${Array.from({ length: 50 }, () => 
              `${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`
            ).join(', ')};
          animation: animStar 150s linear infinite;
        }

        @keyframes animStar {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-2000px);
          }
        }
      `}</style>
    </section>
  );
}
