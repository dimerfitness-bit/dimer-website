'use client';

import { useState } from 'react';
import Image from 'next/image';

const GYMS = {
  'midwest-method': {
    name: 'MIDWEST METHOD',
    location: 'Saint Joseph, MO',
  },
  'link-fitness': {
    name: 'LINK FITNESS',
    location: 'Weston, MO',
  },
  'anytime-fitness-platte-city': {
    name: 'ANYTIME FITNESS',
    location: 'Platte City, MO',
  },
};

export default function GymPage({ params }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const gymSlug = params.slug;
  const gym = GYMS[gymSlug] || GYMS['midwest-method'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call - replace with actual Supabase integration
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log({
      gym: gymSlug,
      name,
      email,
      timestamp: new Date().toISOString()
    });

    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 to-transparent animate-pulse-slow"></div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-12 min-h-screen flex flex-col justify-center">
        {/* Gym Logo */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-2">
            {gym.name}
          </h1>
          <p className="text-xl text-gray-400">{gym.location}</p>
        </div>

        {/* Hero Text */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Find Your Workout Partner
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Connect with members who share your fitness goals, schedule, and workout style. 
            Build accountability and make fitness social.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { icon: '🤝', title: 'Match', desc: 'Find partners by workout type & schedule' },
            { icon: '📅', title: 'Schedule', desc: 'Plan workouts together' },
            { icon: '💪', title: 'Grow', desc: 'Stay accountable & motivated' }
          ].map((feature, i) => (
            <div 
              key={i}
              className="bg-slate-900/50 p-6 rounded-xl border border-cyan-500/20 text-center"
            >
              <div className="text-4xl mb-2">{feature.icon}</div>
              <h3 className="font-bold mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Signup Form */}
        <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30">
          <h3 className="text-2xl font-bold mb-2 tracking-wide">Join the Waitlist</h3>
          <p className="text-gray-400 mb-6">
            Be the first to know when we launch at {gym.name}!
          </p>

          {submitted ? (
            <div className="bg-green-500/20 border border-green-500 rounded-xl p-6 text-center">
              <p className="text-lg">✅ You're on the list! We'll email you when we launch.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-black/30 border border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-black/30 border border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all hover:-translate-y-0.5 disabled:opacity-50"
              >
                {loading ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
          )}

          <p className="text-center text-gray-500 text-sm mt-6">
            Beta tester? <a href="#" className="text-cyan-400 hover:text-cyan-300">Get TestFlight Access</a>
          </p>
        </div>

        {/* App Preview */}
        <div className="grid grid-cols-3 gap-4 mt-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-transform">
              <Image
                src={`/screenshot${i}.png`}
                alt={`App Screenshot ${i}`}
                width={300}
                height={600}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-gray-500 text-sm">
        <p>Powered by <a href="https://dimer.app" className="text-cyan-400 hover:text-cyan-300">Dimer Fitness</a></p>
        <p className="mt-2">Questions? <a href="mailto:dimer.fitness@gmail.com" className="text-cyan-400 hover:text-cyan-300">dimer.fitness@gmail.com</a></p>
      </footer>
    </div>
  );
}
