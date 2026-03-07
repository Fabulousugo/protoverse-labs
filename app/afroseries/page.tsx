import AlternatingVideoBackground from "@/components/AlternatingVideoBackground";

export default function AfroSpacePage() {
  const characters: Character[] = [
    {
      name: "Lindiwe",
      role: "Fearless Leader & Primary Pilot",
      trait: "of the Ubuntu Skyrunner",
      image: "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/characters/Lindiwe%20Suited.png",
      color: "from-nebula-blue to-quantum-cyan",
    },
    {
      name: "Ezenwa",
      role: "Software Engineer",
      trait: "& AI Prodigy",
      image: "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/characters/Ezenwa%20Suited.png",
      color: "from-stellar-purple to-nebula-blue",
    },
    {
      name: "Ayo",
      role: "Robotics & Mechanical",
      trait: "Engineering Prodigy",
      image: "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/characters/Ayo%20Suited.png",
      color: "from-quantum-cyan to-nebula-blue",
    },
    {
      name: "Zainab",
      role: "Navigator",
      trait: "& Celestial Cartographer",
      image: "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/characters/Zainab.png",
      color: "from-nebula-blue to-stellar-purple",
    },
    {
      name: "Boma",
      role: "Bio & Hydro",
      trait: "Systems Specialist",
      image: "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/characters/Boma%20Suited.png",
      color: "from-quantum-cyan to-stellar-purple",
    },
    {
      name: "Zawadi",
      role: "Linguist",
      trait: "& Communication Specialist",
      image: "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/characters/Zawadi%20Suited.png",
      color: "from-stellar-purple to-quantum-cyan",
    },
    {
      name: "Tariq",
      role: "Archaeology, History",
      trait: "& Cosmic Mythology Expert",
      image: "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/characters/Tariq%20Suited.png",
      color: "from-nebula-blue to-quantum-cyan",
    },
    {
      name: "Oríkì",
      role: "X AI – Holographic",
      trait: "AI Guide",
      image: "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/characters/Oriki-X.png",
      color: "from-quantum-cyan to-nebula-blue",
      isAI: true,
    },
  ];

  const episodes = [
    { title: 'THE CALL TO THE SKY', description: 'The adventure begins as our young crew receives an extraordinary signal from beyond the stars.', season: 1, episode: 1 },
    { title: 'ORÍKÌ-X AWAKES', description: 'The crew\'s holographic AI guide, Oríkì-X, activates and reveals the true scope of their mission.', season: 1, episode: 2 },
    { title: 'MOON SHADOWS & MAASAI NAVIGATION', description: 'Ancient Maasai star-reading wisdom helps the crew navigate through mysterious lunar shadows.', season: 1, episode: 3 },
    { title: 'THE SOLAR SYSTEM DRUMBEAT', description: 'The crew discovers a cosmic rhythm connecting African drumming traditions to the movements of the planets.', season: 1, episode: 4 },
  ];

  return (
    <>
      {/* Full Page Video Background - Fixed to viewport */}
      <AlternatingVideoBackground 
        videos={[
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
          '/bg2.mp4',
          '/video3.mp4',

        ]}
        interval={5000}
      />

      {/* Dark overlay for readability - Fixed to viewport */}
      <div className="fixed inset-0 bg-black/60 z-10" />

      {/* All content sits above the video */}
      <main className="min-h-screen relative z-20">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-stellar-purple/40 via-nebula-blue/40 to-void-black/40 backdrop-blur-sm text-protoverse-white py-32 px-4 overflow-hidden">
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
              <button className="glass-effect border-2 border-protoverse-white font-bold py-4 px-10 rounded-lg hover:bg-protoverse-white hover:text-nebula-blue transition-all">
                Coming 2025
              </button>
            </div>
          </div>
        </section>

        {/* Crew Intro Picture with GLOW */}
        <section className="py-20 px-4 bg-black/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            {/* Outer glow container */}
            <div className="relative p-1 rounded-2xl bg-gradient-to-r from-quantum-cyan via-verse-blue to-quantum-cyan animate-pulse">
              {/* Glass effect container */}
              <div className="relative rounded-2xl overflow-hidden glass-effect-strong border-2 border-quantum-cyan/50 hover:border-quantum-cyan hover:shadow-2xl hover:shadow-quantum-cyan/50 transition-all duration-500 group">
                {/* Image container */}
                <div className="relative h-[400px] md:h-[600px] w-full bg-gradient-to-br from-nebula-blue/30 to-stellar-purple/30 flex items-center justify-center">
                  <img
                    src="/characters/Ubuntu_SR.jpeg" 
                    alt="AfroSpace Adventurers Crew"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{
                      filter: 'brightness(1.1) contrast(1.1)',
                    }}
                  />
                  
                  {/* Glow overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
                  <div className="absolute inset-0 bg-quantum-cyan/5 mix-blend-overlay" />
                  
                  {/* Corner glow accents */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-quantum-cyan/30 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-verse-blue/30 blur-3xl rounded-full translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform duration-700" />
                  
                  {/* Text overlay with enhanced glow */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-center z-10">
                    <h3 className="text-3xl md:text-5xl font-bold text-protoverse-white mb-2 text-glow-verse drop-shadow-2xl">
                      The Ubuntu Skyrunner Crew
                    </h3>
                    <p className="text-lg md:text-xl text-protoverse-white/90 drop-shadow-lg">
                      Seven heroes, one mission: Explore the cosmos and protect Earth
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Crew */}
        <section className="py-20 px-4 bg-black/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-protoverse-white mb-4 text-glow-cyan">
                Meet the Crew
              </h2>
              <p className="text-xl text-protoverse-white/80 max-w-2xl mx-auto">
                Seven brilliant young Africans on a mission to explore the universe and protect Earth
              </p>
            </div>

            {/* First row — 4 members */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {characters.slice(0, 4).map((char, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-28 h-28 md:w-36 md:h-36 mx-auto mb-4 rounded-full bg-gradient-to-br ${char.color} flex items-center justify-center text-5xl md:text-6xl transform group-hover:scale-110 transition-transform shadow-lg shadow-quantum-cyan/30`}>
                    {char.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-protoverse-white mb-1">{char.name}</h3>
                  <p className="text-xs md:text-sm text-quantum-cyan font-semibold leading-tight">{char.role}</p>
                  <p className="text-xs text-protoverse-white/60 mt-1">{char.trait}</p>
                </div>
              ))}
            </div>

            {/* Second row — 4 members (last one is AI) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {characters.slice(4).map((char, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-28 h-28 md:w-36 md:h-36 mx-auto mb-4 rounded-full bg-gradient-to-br ${char.color} flex items-center justify-center text-5xl md:text-6xl transform group-hover:scale-110 transition-transform shadow-lg shadow-quantum-cyan/30 ${char.isAI ? 'ring-2 ring-quantum-cyan ring-offset-2 ring-offset-transparent' : ''}`}>
                    {char.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-protoverse-white mb-1">{char.name}</h3>
                  {char.isAI && (
                    <span className="inline-block bg-quantum-cyan/20 text-quantum-cyan text-xs px-2 py-0.5 rounded-full mb-1 border border-quantum-cyan/40">AI</span>
                  )}
                  <p className="text-xs md:text-sm text-quantum-cyan font-semibold leading-tight">{char.role}</p>
                  <p className="text-xs text-protoverse-white/60 mt-1">{char.trait}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Episodes Preview */}
        <section className="py-20 px-4 bg-black/30 backdrop-blur-sm text-protoverse-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-quantum-cyan">Season 1 Episodes</h2>
            <div className="space-y-6">
              {episodes.map((ep, index) => (
                <div key={index} className="glass-effect p-6 rounded-xl hover:neon-border-cyan transition-all group">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Episode number badge */}
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-quantum-cyan to-nebula-blue flex items-center justify-center shadow-lg shadow-quantum-cyan/30">
                        <span className="text-xs font-bold text-center leading-tight">S{ep.season}<br/>E{ep.episode}</span>
                      </div>
                      <div>
                        <p className="text-xs text-quantum-cyan mb-1 font-semibold tracking-widest">SEASON {ep.season} · EPISODE {ep.episode}</p>
                        <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-quantum-cyan transition-colors">{ep.title}</h3>
                        <p className="text-protoverse-white/70 text-sm">{ep.description}</p>
                      </div>
                    </div>
                    <button className="flex-shrink-0 bg-quantum-cyan text-void-black px-6 py-2 rounded-lg font-semibold hover:bg-protoverse-white hover:scale-105 transition-all">
                      Preview
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Educational Value */}
        <section className="py-20 px-4 bg-black/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-protoverse-white">What Kids Learn</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '🚀', title: 'Space Science', items: ['Astronomy', 'Physics', 'Spacecraft', 'Planets'] },
                { icon: '🤖', title: 'AI & Technology', items: ['Coding', 'Robotics', 'AI Basics', 'Innovation'] },
                { icon: '🌍', title: 'African Culture', items: ['Heritage', 'Languages', 'Values', 'Unity'] },
              ].map((category, index) => (
                <div key={index} className="glass-effect p-6 rounded-xl hover:neon-border-cyan transition-all group">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{category.icon}</div>
                  <h3 className="text-xl font-bold text-protoverse-white mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-protoverse-white/80">
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
        <section className="py-20 px-4 bg-gradient-to-r from-nebula-blue/50 to-stellar-purple/50 backdrop-blur-sm text-protoverse-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join the Adventure!</h2>
            <p className="text-xl mb-8 text-protoverse-white/90">
              Be the first to know when new episodes drop. Subscribe to our newsletter!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-deep-space focus:outline-none focus:ring-2 focus:ring-quantum-cyan"
              />
              <button className="bg-protoverse-white text-nebula-blue font-bold px-8 py-3 rounded-lg hover:scale-105 transition-transform">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}