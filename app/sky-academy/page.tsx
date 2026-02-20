'use client';

import { useState } from 'react';
import AlternatingVideoBackground from '@/components/AlternatingVideoBackground';

export default function SkyAcademyPage() {
  const [activeTab, setActiveTab] = useState('kids');

  const programs = {
    kids: [
      {
        title: 'AI-Enhanced Learning',
        age: '8-12 years',
        description: 'Interactive AI animations and storytelling',
        features: ['AI Fundamentals', 'Creative Projects', 'Fun Animations', 'Storytelling'],
        icon: '🧠'
      },
      {
        title: 'Junior Space Explorers',
        age: '8-12 years',
        description: 'Introduction to space science and astronomy',
        features: ['Solar System', 'Constellations', 'Space Missions', 'Telescope Time'],
        icon: '🌟'
      },
    ],
    teens: [
      {
        title: 'Model Rocketry Academy',
        age: '13-17 years',
        description: 'Design, build, and launch model rockets',
        features: ['Rocket Design', 'Propulsion Systems', 'Launch Operations', 'Competitions'],
        icon: '🚀'
      },
      {
        title: 'CubeSat Program',
        age: '13-17 years',
        description: 'Learn satellite technology and communication',
        features: ['Satellite Design', 'Sensor Integration', 'Telemetry', 'Ground Stations'],
        icon: '🛰️'
      },
    ],
    schools: [
      {
        title: 'Curriculum Development',
        age: 'Schools',
        description: 'Integrate space-AI into your curriculum',
        features: ['Custom Programs', 'Teacher Training', 'Resources', 'Assessment Tools'],
        icon: '📚'
      },
      {
        title: 'School Partnerships',
        age: 'Institutions',
        description: 'Long-term collaboration programs',
        features: ['Regular Workshops', 'Field Trips', 'Competition Teams', 'Mentorship'],
        icon: '🤝'
      },
    ],
  };

  const crew = [
    { name: 'Lindiwe', role: 'Fearless Leader & Primary Pilot', ship: 'of the Ubuntu Skyrunner', icon: '👩‍🚀', color: 'from-nebula-blue to-quantum-cyan' },
    { name: 'Ezenwa', role: 'Software Engineer', ship: '& AI Prodigy', icon: '👨‍💻', color: 'from-stellar-purple to-nebula-blue' },
    { name: 'Ayo', role: 'Robotics & Mechanical', ship: 'Engineering Prodigy', icon: '🤖', color: 'from-quantum-cyan to-nebula-blue' },
    { name: 'Zainab', role: 'Navigator', ship: '& Celestial Cartographer', icon: '🧭', color: 'from-nebula-blue to-stellar-purple' },
    { name: 'Boma', role: 'Bio & Hydro', ship: 'Systems Specialist', icon: '🌿', color: 'from-quantum-cyan to-stellar-purple' },
    { name: 'Zawadi', role: 'Linguist', ship: '& Communication Specialist', icon: '🗣️', color: 'from-stellar-purple to-quantum-cyan' },
    { name: 'Tariq', role: 'Archaeology, History', ship: '& Cosmic Mythology Expert', icon: '🏺', color: 'from-nebula-blue to-quantum-cyan' },
    { name: 'Oríkì', role: 'X AI – Holographic', ship: 'AI Guide', icon: '✨', color: 'from-quantum-cyan to-nebula-blue', isAI: true },
  ];

  return (
    <>
      {/* Full Page Video Background - Fixed to viewport */}
      <AlternatingVideoBackground 
        videos={[
          '/video16.mp4',         
          '/video_homepage.mp4',
          '/Futuristic_African_Child_Astronaut_Video.mp4',
          '/bg2.mp4',
          '/video3.mp4',
          '/video12.mp4',
          '/video13.mp4',
          '/video8.mp4',
          '/video9.mp4',
          '/video10.mp4',
          '/video11.mp4',
          '/video12.mp4',
          '/video14.mp4',
          '/video15.mp4',
          '/video4.mp4',
          '/video5.mp4',
          '/video6.mp4',
        ]}
        interval={5000}
      />

      {/* All content sits above the video */}
      <main className="min-h-screen relative z-20">
        {/* Hero */}
        <section className="relative text-protoverse-white py-32 px-4 overflow-hidden bg-black/30 backdrop-blur-sm">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{ 
              backgroundImage: 'radial-gradient(circle, #5DF0DE 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow-cyan">
              Sky Academy
            </h1>
            <p className="text-2xl md:text-3xl text-quantum-cyan mb-8">
              Transform Your Future Through Space & AI Education
            </p>
            <p className="text-lg text-protoverse-white/90 max-w-3xl mx-auto mb-12">
              Join thousands of students across Africa learning space science, artificial intelligence, 
              and innovation through hands-on programs designed to inspire and empower.
            </p>
            <a
              href="/contact"
              className="inline-block bg-horizon-gradient text-protoverse-white font-bold py-4 px-10 rounded-lg hover:scale-105 transition-transform text-lg"
            >
              Enroll Now
            </a>
          </div>
        </section>

        {/* Tabs */}
        <section className="bg-black/40 backdrop-blur-sm py-12 px-4 border-b border-quantum-cyan/20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { id: 'kids', label: 'Kids (8-12)', icon: '👶' },
                { id: 'teens', label: 'Teens (13-17)', icon: '👨‍🎓' },
                { id: 'schools', label: 'Schools', icon: '🏫' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-nebula-blue text-protoverse-white shadow-lg shadow-nebula-blue/50'
                      : 'glass-effect text-protoverse-white hover:bg-quantum-cyan/20'
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 px-4 bg-black/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {programs[activeTab as keyof typeof programs].map((program, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-2xl p-8 hover:neon-border-cyan transition-all group"
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{program.icon}</div>
                  <h3 className="text-2xl font-bold text-protoverse-white mb-2">{program.title}</h3>
                  <p className="text-sm text-quantum-cyan font-semibold mb-4">{program.age}</p>
                  <p className="text-protoverse-white/80 mb-6">{program.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <p className="font-semibold text-protoverse-white">What You'll Learn:</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-protoverse-white/80">
                          <span className="text-quantum-cyan mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-nebula-blue text-protoverse-white py-3 rounded-lg font-semibold hover:bg-quantum-cyan hover:scale-105 transition-all">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 bg-black/40 backdrop-blur-sm text-protoverse-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-quantum-cyan">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Choose Program', icon: '📋' },
                { step: '2', title: 'Register Online', icon: '💻' },
                { step: '3', title: 'Start Learning', icon: '🚀' },
                { step: '4', title: 'Get Certified', icon: '🏆' },
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-quantum-cyan to-nebula-blue flex items-center justify-center text-3xl font-bold shadow-lg shadow-quantum-cyan/30 group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-black/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-protoverse-white">Student Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Amina K.',
                  age: 14,
                  quote: 'Sky Academy opened my eyes to the possibilities of space science. Now I dream of becoming an astronaut!',
                  program: 'Model Rocketry'
                },
                {
                  name: 'David O.',
                  age: 11,
                  quote: 'The AI programs are so fun! I built my own chatbot and showed it to my whole class.',
                  program: 'AI Learning'
                },
                {
                  name: 'Mrs Rita',
                  age: null,
                  quote: 'Protoverse transformed our school\'s STEM program. Our students are more engaged than ever!',
                  program: 'School Partnership'
                },
              ].map((testimonial, index) => (
                <div key={index} className="glass-effect p-6 rounded-xl hover:neon-border-cyan transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-nebula-blue to-quantum-cyan flex items-center justify-center text-xl text-protoverse-white font-bold shadow-lg">
                      {testimonial.name[0]}
                    </div>
                    <div className="ml-3">
                      <p className="font-bold text-protoverse-white">{testimonial.name}</p>
                      <p className="text-sm text-protoverse-white/70">{testimonial.program}</p>
                    </div>
                  </div>
                  <p className="text-protoverse-white/80 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

       
        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-stellar-purple/50 to-nebula-blue/50 backdrop-blur-sm text-protoverse-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Space Journey?</h2>
            <p className="text-xl mb-8 text-protoverse-white/90">
              Join Sky Academy today and unlock your potential in space science and AI!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-protoverse-white text-nebula-blue font-bold py-4 px-10 rounded-lg hover:scale-105 transition-transform"
              >
                Register for Individual
              </a>
              <a
                href="/contact"
                className="inline-block glass-effect border-2 border-protoverse-white font-bold py-4 px-10 rounded-lg hover:bg-protoverse-white hover:text-nebula-blue transition-all"
              >
                Register for School
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}