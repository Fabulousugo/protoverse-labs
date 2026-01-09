'use client';

import { useState } from 'react';

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
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-deep-space text-protoverse-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow-cyan">
            Get In Touch
          </h1>
          <p className="text-xl text-protoverse-white/80 max-w-3xl mx-auto">
            Have questions? Want to partner? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 px-4 bg-protoverse-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-deep-space mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-deep-space mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-quantum-cyan focus:outline-none transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-deep-space mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-quantum-cyan focus:outline-none transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-deep-space mb-2">Subject</label>
                <select
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-quantum-cyan focus:outline-none transition-colors"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="enrollment">Enrollment</option>
                  <option value="partnership">Partnership</option>
                  <option value="events">Book an Event</option>
                  <option value="support">Support</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-deep-space mb-2">Message</label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-quantum-cyan focus:outline-none transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-nebula-blue text-protoverse-white font-bold py-4 rounded-lg hover:bg-quantum-cyan hover:text-void-black transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-deep-space mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-quantum-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="font-bold text-deep-space mb-1">Address</h3>
                  <p className="text-gray-600">
                    123 Innovation Drive<br />
                    Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-quantum-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="font-bold text-deep-space mb-1">Email</h3>
                  <p className="text-gray-600">info@protoverselabs.com</p>
                  <p className="text-gray-600">partnerships@protoverselabs.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-quantum-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="font-bold text-deep-space mb-1">Phone</h3>
                  <p className="text-gray-600">+234 800 SPACE AI</p>
                  <p className="text-gray-600">+234 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-quantum-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🕐</span>
                </div>
                <div>
                  <h3 className="font-bold text-deep-space mb-1">Office Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9AM - 6PM</p>
                  <p className="text-gray-600">Saturday: 10AM - 4PM</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">🗺️ Map View</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-deep-space mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'How do I enroll in Sky Academy?', a: 'Visit our Sky Academy page and click "Register Now" to get started!' },
              { q: 'Do you offer school visits?', a: 'Yes! Contact us to book a custom program for your school.' },
              { q: 'What age groups do you serve?', a: 'We have programs for ages 8-17, plus adult partnerships.' },
              { q: 'Are your programs available online?', a: 'We offer both in-person and virtual options.' },
            ].map((faq, index) => (
              <div key={index} className="bg-protoverse-white p-6 rounded-lg">
                <h3 className="font-bold text-deep-space mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
