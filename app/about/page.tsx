export default function AboutPage() {
  const team = [
    { name: 'Dr. Amara Okafor', role: 'Founder & CEO', image: '👩‍🚀' },
    { name: 'Kwame Mensah', role: 'Chief Technology Officer', image: '👨‍💻' },
    { name: 'Zainab Ibrahim', role: 'Head of Education', image: '👩‍🏫' },
    { name: 'Chidi Nwosu', role: 'Lead Aerospace Engineer', image: '👨‍🔬' },
  ];

  const values = [
    { icon: '🎯', title: 'Innovation First', description: 'Pushing boundaries in space and AI education' },
    { icon: '🌍', title: 'African Excellence', description: 'Celebrating and amplifying African talent' },
    { icon: '🤝', title: 'Inclusive Access', description: 'Making STEM education accessible to all' },
    { icon: '🚀', title: 'Future-Focused', description: 'Preparing the next generation of innovators' },
  ];

  const milestones = [
    { year: '2022', event: 'Protoverse Labs Founded' },
    { year: '2023', event: 'Launched Sky Academy with 500+ students' },
    { year: '2024', event: 'First CubeSat program launched' },
    { year: '2025', event: 'AfroSpace Adventurers series in production' },
  ];

  return (
    <>
      {/* Full Page Video Background - Fixed to viewport */}
      <video
        className="fixed inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/Futuristic_African_Child_Astronaut_Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for readability - Fixed to viewport */}
      <div className="fixed inset-0 bg-black/60 z-10" />

      {/* All content sits above the video */}
      <main className="min-h-screen relative z-20">
        {/* Hero Section */}
        <section className="text-protoverse-white py-20 px-4 bg-black/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow-cyan">
              About Protoverse Labs
            </h1>
            <p className="text-xl md:text-2xl text-protoverse-white/90 max-w-3xl mx-auto">
              Building Africa's future through space science and artificial intelligence education
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 bg-black/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="glass-effect p-8 rounded-2xl text-protoverse-white border border-quantum-cyan/30">
                <div className="text-5xl mb-4">🎯</div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg leading-relaxed text-protoverse-white/90">
                  To democratize access to world-class space science and AI education across Africa, 
                  inspiring and equipping the next generation of innovators, scientists, and entrepreneurs 
                  to solve Africa's challenges and contribute to global advancement.
                </p>
              </div>

              <div className="glass-effect p-8 rounded-2xl text-protoverse-white border border-stellar-purple/30">
                <div className="text-5xl mb-4">🔭</div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg leading-relaxed text-protoverse-white/90">
                  To establish Protoverse Labs as Africa's leading innovation hub for space technology 
                  and artificial intelligence, creating a thriving ecosystem where African youth can dream, 
                  learn, and build the technologies that will shape humanity's future in space.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 px-4 bg-black/30 backdrop-blur-sm text-protoverse-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-quantum-cyan">Our Story</h2>
            <div className="glass-effect p-8 rounded-2xl">
              <p className="text-lg leading-relaxed mb-6 text-protoverse-white/90">
                Protoverse Labs was born from a simple yet powerful idea: every African child deserves 
                the opportunity to reach for the stars. Founded in 2022 by a team of passionate educators, 
                engineers, and innovators, we set out to bridge the gap between Africa's brilliant young 
                minds and the cutting-edge fields of space science and artificial intelligence.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-protoverse-white/90">
                We recognized that traditional education systems often lacked the resources and curriculum 
                to inspire students about space exploration and emerging technologies. So we created 
                Protoverse Labs—a place where imagination meets innovation, where African stories are told 
                through the lens of space adventure, and where hands-on learning transforms curiosity into capability.
              </p>
              <p className="text-lg leading-relaxed text-protoverse-white/90">
                Today, we're proud to serve thousands of students across Africa through our Sky Academy 
                programs, AfroSpace Adventurers series, and community outreach initiatives. But we're 
                just getting started. The future of space exploration will be written by diverse voices 
                from every corner of the globe—and Africa's voice will be heard loud and clear.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-4 bg-black/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-protoverse-white">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="glass-effect p-6 rounded-xl hover:neon-border-cyan transition-all group"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
                  <h3 className="text-xl font-bold text-protoverse-white mb-2">{value.title}</h3>
                  <p className="text-protoverse-white/80">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4 bg-black/30 backdrop-blur-sm text-protoverse-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-quantum-cyan">Our Journey</h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-quantum-cyan to-nebula-blue flex items-center justify-center shadow-lg shadow-quantum-cyan/30">
                    <span className="text-2xl font-bold">{milestone.year}</span>
                  </div>
                  <div className="flex-1 glass-effect p-6 rounded-lg hover:neon-border-cyan transition-all">
                    <p className="text-lg">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-4 bg-black/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-protoverse-white">Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-nebula-blue to-quantum-cyan flex items-center justify-center text-6xl shadow-lg shadow-quantum-cyan/30 group-hover:scale-110 transition-transform">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold text-protoverse-white mb-1">{member.name}</h3>
                  <p className="text-protoverse-white/70">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-nebula-blue/50 to-stellar-purple/50 backdrop-blur-sm text-protoverse-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8 text-protoverse-white/90">
              Be part of Africa's space-tech revolution. Whether you're a student, educator, or partner, 
              there's a place for you at Protoverse Labs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/sky-academy"
                className="bg-protoverse-white text-nebula-blue font-bold py-3 px-8 rounded-lg hover:scale-105 transition-transform inline-block"
              >
                Join Sky Academy
              </a>
              <a
                href="/contact"
                className="glass-effect border-2 border-protoverse-white text-protoverse-white font-bold py-3 px-8 rounded-lg hover:bg-protoverse-white hover:text-nebula-blue transition-all inline-block"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}