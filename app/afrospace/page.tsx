export default function AfroSpacePage() {
  const characters = [
    { name: 'Amara', role: 'Captain & Pilot', trait: 'Brave & Strategic', icon: '👩‍🚀', color: 'from-nebula-blue to-quantum-cyan' },
    { name: 'Kwame', role: 'AI Specialist', trait: 'Genius Coder', icon: '👨‍💻', color: 'from-stellar-purple to-nebula-blue' },
    { name: 'Zara', role: 'Scientist', trait: 'Curious & Brilliant', icon: '👩‍🔬', color: 'from-quantum-cyan to-hologram-teal' },
    { name: 'Tunde', role: 'Engineer', trait: 'Creative Problem-Solver', icon: '👨‍🔧', color: 'from-solar-gold to-stellar-purple' },
  ];

  const episodes = [
    { title: 'The Cosmic Awakening', description: 'The team discovers an ancient signal from deep space', season: 1, episode: 1 },
    { title: 'AI Uprising', description: 'They must outsmart a rogue AI threatening Earth', season: 1, episode: 2 },
    { title: 'The Nebula Mystery', description: 'A mysterious nebula holds secrets to the universe', season: 1, episode: 3 },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-stellar-purple via-nebula-blue to-void-black text-protoverse-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-protoverse-white rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random()
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow-cyan">
            AfroSpace Adventurers
          </h1>
          <p className="text-2xl md:text-3xl text-quantum-cyan mb-8">
            Africa's First Space-AI Animated Series
          </p>
          <p className="text-lg text-protoverse-white/90 max-w-3xl mx-auto mb-12">
            Join an incredible team of African space explorers as they journey through the cosmos, 
            solving mysteries with AI and inspiring the next generation of innovators!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-protoverse-white text-nebula-blue font-bold py-4 px-10 rounded-lg hover:scale-105 transition-transform">
              Watch Trailer
            </button>
            <button className="bg-transparent border-2 border-protoverse-white font-bold py-4 px-10 rounded-lg hover:bg-protoverse-white hover:text-nebula-blue transition-all">
              Coming 2025
            </button>
          </div>
        </div>
      </section>

      {/* Meet the Crew */}
      <section className="py-20 px-4 bg-protoverse-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-deep-space">Meet the Crew</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Four brilliant young Africans on a mission to explore the universe and protect Earth
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {characters.map((char, index) => (
              <div key={index} className="text-center group">
                <div className={`w-40 h-40 mx-auto mb-4 rounded-full bg-gradient-to-br ${char.color} flex items-center justify-center text-7xl transform group-hover:scale-110 transition-transform shadow-lg`}>
                  {char.icon}
                </div>
                <h3 className="text-2xl font-bold text-deep-space mb-1">{char.name}</h3>
                <p className="text-sm text-quantum-cyan font-semibold mb-2">{char.role}</p>
                <p className="text-gray-600">{char.trait}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Episodes Preview */}
      <section className="py-20 px-4 bg-deep-space text-protoverse-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-quantum-cyan">Season 1 Episodes</h2>
          <div className="space-y-6">
            {episodes.map((ep, index) => (
              <div key={index} className="glass-effect p-6 rounded-xl hover:neon-border-cyan transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-quantum-cyan mb-1">S{ep.season} E{ep.episode}</p>
                    <h3 className="text-2xl font-bold mb-2">{ep.title}</h3>
                    <p className="text-protoverse-white/70">{ep.description}</p>
                  </div>
                  <button className="bg-quantum-cyan text-void-black px-6 py-2 rounded-lg font-semibold hover:bg-protoverse-white transition-colors">
                    Preview
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Value */}
      <section className="py-20 px-4 bg-protoverse-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-deep-space">What Kids Learn</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🚀', title: 'Space Science', items: ['Astronomy', 'Physics', 'Spacecraft', 'Planets'] },
              { icon: '🤖', title: 'AI & Technology', items: ['Coding', 'Robotics', 'AI Basics', 'Innovation'] },
              { icon: '🌍', title: 'African Culture', items: ['Heritage', 'Languages', 'Values', 'Unity'] },
            ].map((category, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-deep-space mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-quantum-cyan mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-gradient-to-r from-nebula-blue to-stellar-purple text-protoverse-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Adventure!</h2>
          <p className="text-xl mb-8">
            Be the first to know when new episodes drop. Subscribe to our newsletter!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-deep-space"
            />
            <button className="bg-protoverse-white text-nebula-blue font-bold px-8 py-3 rounded-lg hover:scale-105 transition-transform">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
