'use client';

import { useState } from 'react';
import AlternatingVideoBackground from '@/components/AlternatingVideoBackground';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you! We\'ll get back to you soon.');
  };

  return (
    <>
      {/* Alternating Video Background */}
      <AlternatingVideoBackground 
                    videos={[
                      '/Futuristic_African_Child_Astronaut_Video.mp4',
                      '/bg2.mp4',
                      '/video3.mp4',
                      '/video4.mp4',
                      '/video5.mp4',
                      '/video6.mp4',
                      '/video7.mp4',
                      '/video homepage.mp4',
                    ]}
                    interval={5000} // Switch every 30 seconds
                  />

      {/* All content sits above the video */}
      <main className="min-h-screen relative z-20">
        {/* Hero */}
        <section className="bg-black/30 backdrop-blur-sm text-protoverse-white py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow-cyan">
              Get In Touch
            </h1>
            <p className="text-xl text-protoverse-white/90 max-w-3xl mx-auto">
              Have questions? Want to partner? We'd love to hear from you!
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-20 px-4 bg-black/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-effect p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-protoverse-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-protoverse-white mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-protoverse-white/10 border-2 border-quantum-cyan/30 rounded-lg focus:border-quantum-cyan focus:outline-none transition-colors text-protoverse-white placeholder-protoverse-white/50"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-protoverse-white mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-protoverse-white/10 border-2 border-quantum-cyan/30 rounded-lg focus:border-quantum-cyan focus:outline-none transition-colors text-protoverse-white placeholder-protoverse-white/50"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-protoverse-white mb-2">Subject</label>
                  <select title='protoverse'
                    className="w-full px-4 py-3 bg-protoverse-white/10 border-2 border-quantum-cyan/30 rounded-lg focus:border-quantum-cyan focus:outline-none transition-colors text-protoverse-white"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option value="" className="bg-deep-space">Select a topic</option>
                    <option value="general" className="bg-deep-space">General Inquiry</option>
                    <option value="enrollment" className="bg-deep-space">Enrollment</option>
                    <option value="partnership" className="bg-deep-space">Partnership</option>
                    <option value="events" className="bg-deep-space">Book an Event</option>
                    <option value="support" className="bg-deep-space">Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-protoverse-white mb-2">Message</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-protoverse-white/10 border-2 border-quantum-cyan/30 rounded-lg focus:border-quantum-cyan focus:outline-none transition-colors resize-none text-protoverse-white placeholder-protoverse-white/50"
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-nebula-blue text-protoverse-white font-bold py-4 rounded-lg hover:bg-quantum-cyan hover:scale-105 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-protoverse-white mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 glass-effect p-4 rounded-lg hover:neon-border-cyan transition-all">
                  <div className="w-12 h-12 bg-quantum-cyan/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-protoverse-white mb-1">Address</h3>
                    <p className="text-protoverse-white/80">
                      123 Innovation Drive<br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 glass-effect p-4 rounded-lg hover:neon-border-cyan transition-all">
                  <div className="w-12 h-12 bg-quantum-cyan/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-protoverse-white mb-1">Email</h3>
                    <p className="text-protoverse-white/80">info@protoverselabs.com</p>
                    <p className="text-protoverse-white/80">partnerships@protoverselabs.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 glass-effect p-4 rounded-lg hover:neon-border-cyan transition-all">
                  <div className="w-12 h-12 bg-quantum-cyan/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-protoverse-white mb-1">Phone</h3>
                    <p className="text-protoverse-white/80">+234 800 SPACE AI</p>
                    <p className="text-protoverse-white/80">+234 123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 glass-effect p-4 rounded-lg hover:neon-border-cyan transition-all">
                  <div className="w-12 h-12 bg-quantum-cyan/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🕐</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-protoverse-white mb-1">Office Hours</h3>
                    <p className="text-protoverse-white/80">Monday - Friday: 9AM - 6PM</p>
                    <p className="text-protoverse-white/80">Saturday: 10AM - 4PM</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 glass-effect rounded-lg h-64 flex items-center justify-center border border-quantum-cyan/30">
                <p className="text-protoverse-white/70 text-xl">🗺️ Map View</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-black/30 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-protoverse-white mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'How do I enroll in Sky Academy?', a: 'Visit our Sky Academy page and click "Register Now" to get started!' },
                { q: 'Do you offer school visits?', a: 'Yes! Contact us to book a custom program for your school.' },
                { q: 'What age groups do you serve?', a: 'We have programs for ages 8-17, plus adult partnerships.' },
                { q: 'Are your programs available online?', a: 'We offer both in-person and virtual options.' },
              ].map((faq, index) => (
                <div key={index} className="glass-effect p-6 rounded-lg hover:neon-border-cyan transition-all group">
                  <h3 className="font-bold text-protoverse-white mb-2 group-hover:text-quantum-cyan transition-colors">{faq.q}</h3>
                  <p className="text-protoverse-white/80">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}