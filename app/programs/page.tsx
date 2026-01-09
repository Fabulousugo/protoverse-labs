'use client';

import { useState } from 'react';

export default function ProgramsPage() {
  const [filter, setFilter] = useState('all');

  const events = [
    { 
      title: 'FUSION 2026', 
      date: 'January 1, 2026', 
      type: 'conference', 
      description: 'Africa\'s largest space-tech innovation conference',
      location: 'Lagos, Nigeria',
      image: '🌍'
    },
    { 
      title: 'Astronomy Night', 
      date: 'Every Friday', 
      type: 'regular', 
      description: 'Stargazing and telescope sessions',
      location: 'Sky Academy Campus',
      image: '🔭'
    },
    { 
      title: 'Rocket Launch Competition', 
      date: 'March 15, 2025', 
      type: 'competition', 
      description: 'Student teams compete with model rockets',
      location: 'Multiple Locations',
      image: '🚀'
    },
    { 
      title: 'AI Hackathon for Kids', 
      date: 'April 20, 2025', 
      type: 'workshop', 
      description: '24-hour coding challenge for young innovators',
      location: 'Virtual & In-Person',
      image: '💻'
    },
    { 
      title: 'Space Camp Summer', 
      date: 'June - August 2025', 
      type: 'camp', 
      description: 'Immersive 2-week space science experience',
      location: 'Abuja, Nigeria',
      image: '⛺'
    },
    { 
      title: 'Junior Scientists Fair', 
      date: 'May 10, 2025', 
      type: 'competition', 
      description: 'Showcase your STEM projects',
      location: 'Nationwide',
      image: '🔬'
    },
  ];

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(e => e.type === filter);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-deep-space text-protoverse-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow-cyan">
            Programs & Events
          </h1>
          <p className="text-xl text-protoverse-white/80 max-w-3xl mx-auto">
            Discover exciting opportunities to learn, compete, and connect with fellow space enthusiasts
          </p>
        </div>
      </section>

      {/* FUSION Countdown */}
      <section className="py-20 px-4 bg-gradient-to-r from-stellar-purple to-nebula-blue text-protoverse-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block glass-effect px-3 py-1 rounded-full mb-4">
            <span className="text-sm font-semibold">FEATURED EVENT</span>
          </div>
          <h2 className="text-5xl font-bold mb-4">FUSION 2026</h2>
          <p className="text-2xl mb-8">Africa's Premier Space-Tech Innovation Conference</p>
          
          {/* Countdown */}
          <div className="flex justify-center gap-8 mb-8">
            {[
              { value: '304', label: 'Days' },
              { value: '12', label: 'Hours' },
              { value: '45', label: 'Minutes' },
              { value: '23', label: 'Seconds' },
            ].map((unit, index) => (
              <div key={index} className="text-center">
                <div className="bg-protoverse-white/10 backdrop-blur-md rounded-lg p-4 mb-2 min-w-[80px]">
                  <span className="text-4xl font-bold text-glow-cyan">{unit.value}</span>
                </div>
                <p className="text-sm text-protoverse-white/70">{unit.label}</p>
              </div>
            ))}
          </div>

          <button className="bg-protoverse-white text-nebula-blue font-bold py-4 px-10 rounded-lg hover:scale-105 transition-transform">
            Register for FUSION 2026
          </button>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-protoverse-white py-8 px-4 border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { id: 'all', label: 'All Events' },
              { id: 'conference', label: 'Conferences' },
              { id: 'workshop', label: 'Workshops' },
              { id: 'competition', label: 'Competitions' },
              { id: 'camp', label: 'Camps' },
              { id: 'regular', label: 'Regular Events' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-5 py-2 rounded-lg font-semibold transition-all ${
                  filter === tab.id
                    ? 'bg-nebula-blue text-protoverse-white'
                    : 'bg-gray-100 text-deep-space hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div
                key={index}
                className="bg-protoverse-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-nebula-blue to-quantum-cyan h-48 flex items-center justify-center text-8xl">
                  {event.image}
                </div>
                <div className="p-6">
                  <div className="inline-block bg-quantum-cyan/20 text-quantum-cyan px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {event.type.toUpperCase()}
                  </div>
                  <h3 className="text-2xl font-bold text-deep-space mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">📅 {event.date}</p>
                  <p className="text-sm text-gray-600 mb-4">📍 {event.location}</p>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <button className="w-full bg-nebula-blue text-protoverse-white py-2 rounded-lg font-semibold hover:bg-quantum-cyan hover:text-void-black transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book an Event */}
      <section className="py-20 px-4 bg-deep-space text-protoverse-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Book Protoverse for Your Event</h2>
          <p className="text-xl mb-8 text-protoverse-white/80">
            Bring space science and AI education to your school, community, or organization
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '🏫', title: 'School Visits', desc: 'Interactive workshops and demos' },
              { icon: '🎉', title: 'Birthday Parties', desc: 'Space-themed celebrations' },
              { icon: '🏢', title: 'Corporate Events', desc: 'Team building & innovation' },
            ].map((service, index) => (
              <div key={index} className="glass-effect p-6 rounded-xl">
                <div className="text-5xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-protoverse-white/70 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
          <button className="bg-horizon-gradient text-protoverse-white font-bold py-4 px-10 rounded-lg hover:scale-105 transition-transform">
            Request Booking
          </button>
        </div>
      </section>
    </main>
  );
}
