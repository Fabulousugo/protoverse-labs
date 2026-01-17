export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-void-black px-4">
        {/* ✅ Video Background (NEW) */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          {/* Put your video in /public/videos/space.mp4 */}
          <source src="Futuristic_African_Child_Astronaut_Video.mp4" type="video/mp4" />
        </video>

        {/* ✅ Soft dark overlay so text stays readable (NEW) */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Gradient Background (kept) */}
        <div className="absolute inset-0 bg-space-fade opacity-80 z-10" />

        {/* Stars Background (kept) */}
        <div className="absolute inset-0 z-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-quantum-cyan rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Content (kept) */}
        <div className="relative z-20 text-center w-full max-w-5xl mx-auto py-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-protoverse-white mb-4 sm:mb-6 text-glow-cyan animate-fade-in font-logo">
            Protoverse Labs
          </h1>

          <p className="text-xl sm:text-2xl md:text-4xl text-quantum-cyan font-semibold mb-3 sm:mb-4 animate-fade-in-up font-logo">
            Innovation Without Limits
          </p>

          <p
            className="text-base sm:text-lg md:text-xl text-protoverse-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Where Space Science meets Artificial Intelligence, and Africa's future innovators are born.
          </p>

          {/* Quick Navigation Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mt-8 sm:mt-12">
            {[
              { title: "Space Education", icon: "🚀", href: "/sky-academy" },
              { title: "R&D Prototyping", icon: "🔬", href: "/about" },
              { title: "Space Events", icon: "🌟", href: "/programs" },
              { title: "Partner With Us", icon: "🤝", href: "/contact" },
              { title: "Join Community", icon: "🌍", href: "/contact" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="glass-effect p-4 sm:p-6 rounded-lg hover:neon-border-cyan transition-all duration-300 cursor-pointer group animate-fade-in-up block"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-protoverse-white font-semibold text-xs sm:text-sm">
                  {item.title}
                </h3>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-12 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <a
              href="/sky-academy"
              className="inline-block bg-nebula-blue hover:bg-quantum-cyan text-protoverse-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-quantum-cyan/50 text-sm sm:text-base font-logo"
            >
              Explore Our Universe
            </a>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float z-20">
          <div className="w-6 h-10 border-2 border-quantum-cyan rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-quantum-cyan rounded-full animate-float" />
          </div>
        </div>
      </section>
      {/* About Preview Section */}
      <section className="py-20 px-4 bg-protoverse-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-deep-space mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Protoverse Labs is Africa's premier destination for space science and artificial intelligence
                education. We're building the next generation of African innovators through immersive learning
                experiences, cutting-edge research, and community engagement.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">🎯</div>
                  <h3 className="font-bold text-deep-space mb-1">Mission</h3>
                  <p className="text-sm text-gray-600">Democratize space & AI education across Africa</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">🔭</div>
                  <h3 className="font-bold text-deep-space mb-1">Vision</h3>
                  <p className="text-sm text-gray-600">Lead Africa's space-tech innovation ecosystem</p>
                </div>
              </div>
              <a
                href="/about"
                className="inline-block mt-8 bg-nebula-blue text-protoverse-white px-6 py-3 rounded-lg hover:bg-deep-space transition-colors"
              >
                Learn More About Us
              </a>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-nebula-blue to-stellar-purple rounded-2xl flex items-center justify-center">
              <p className="text-protoverse-white text-6xl">🌌</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sky Academy Preview */}
      <section className="py-20 px-4 bg-deep-space relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, #5DF0DE 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-protoverse-white mb-4 text-glow-cyan">
              Sky Academy
            </h2>
            <p className="text-xl text-protoverse-white/80">
              Transform Your Future Through Space & AI Education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🧠", title: "AI Learning for Kids", description: "AI animations, storytelling, and hands-on projects" },
              { icon: "🚀", title: "Model Rocketry", description: "Design, build, and launch your own rockets" },
              { icon: "🛰️", title: "CubeSat Program", description: "Learn about satellites and space communication" },
              { icon: "🏫", title: "School Programs", description: "Curriculum development and teacher training" },
            ].map((program, index) => (
              <div
                key={index}
                className="glass-effect p-6 rounded-xl hover:neon-border-cyan transition-all duration-300 group cursor-pointer"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{program.icon}</div>
                <h3 className="text-xl font-bold text-protoverse-white mb-3">{program.title}</h3>
                <p className="text-protoverse-white/70 text-sm mb-4">{program.description}</p>
                <a href="/sky-academy" className="text-quantum-cyan text-sm group-hover:underline">
                  Learn More →
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/sky-academy"
              className="inline-block bg-horizon-gradient text-protoverse-white font-bold py-4 px-8 rounded-lg hover:scale-105 transition-transform"
            >
              Join Sky Academy
            </a>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-stellar-purple to-nebula-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-protoverse-white mb-4">
            🎬 AfroSpace Adventurers Coming Soon!
          </h2>
          <p className="text-xl text-protoverse-white/90 mb-8">Africa's first space-AI animated series for kids</p>
          <div className="glass-effect p-8 rounded-2xl inline-block">
            <p className="text-protoverse-white text-lg mb-4">Stay tuned for epic adventures across the cosmos! 🌟</p>
            <a
              href="/afrospace"
              className="inline-block bg-protoverse-white text-nebula-blue font-bold px-6 py-3 rounded-lg hover:scale-105 transition-transform"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
