export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-cyan-500/20">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold tracking-wider bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
            DIMER
          </div>
          <a 
            href="mailto:dimer.fitness@gmail.com?subject=Demo%20Request"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 to-transparent animate-pulse-slow"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                White-Label
              </span>
              <br />
              Fitness Community
              <br />
              For Your Gym
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
              Increase member retention and build community with our workout partner matching platform.
            </p>
            
            <a 
              href="mailto:dimer.fitness@gmail.com?subject=Demo%20Request"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all hover:-translate-y-1"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 tracking-wide">
            Why Gym Owners Choose Dimer
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🤝', title: 'Increase Retention', desc: 'Members who work out with partners are 3x more likely to maintain their membership.' },
              { icon: '🎨', title: 'Your Branding', desc: "Fully white-labeled with your gym's colors, logo, and branding. It's YOUR community platform." },
              { icon: '📱', title: 'Zero Setup', desc: 'We handle all the tech. You just display QR codes in your gym and watch engagement soar.' },
              { icon: '📊', title: 'Member Insights', desc: 'See which members are most engaged, popular workout times, and community growth metrics.' },
              { icon: '💪', title: 'Build Community', desc: 'Transform your gym from a place with equipment to a thriving fitness community.' },
              { icon: '🚀', title: 'Launch in Days', desc: 'From first call to member signups in under a week. No complex integrations required.' }
            ].map((feature, i) => (
              <div 
                key={i}
                className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3 tracking-wide">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-cyan-500/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 tracking-wide">
            How It Works
          </h2>
          
          {[
            { num: '01', title: 'We Create Your Branded Page', desc: "We build a custom landing page with your gym's branding, colors, and logo. Your members scan a QR code to join." },
            { num: '02', title: 'Display QR Codes', desc: 'Print QR codes (we provide them) and place them at your front desk, locker rooms, and workout areas.' },
            { num: '03', title: 'Members Connect & Engage', desc: 'Your members find workout partners, schedule sessions together, and build lasting friendships at YOUR gym.' }
          ].map((step, i) => (
            <div key={i} className={`flex items-center gap-12 mb-16 ${i % 2 === 1 ? 'flex-row-reverse' : ''}`}>
              <div className="text-9xl font-bold text-cyan-500/20 min-w-[200px] text-center">
                {step.num}
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4 tracking-wide">{step.title}</h3>
                <p className="text-xl text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide">
            Ready to Build Your Community?
          </h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Schedule a 15-minute demo and see how Dimer can transform your gym's member engagement.
          </p>
          <a 
            href="mailto:dimer.fitness@gmail.com?subject=Demo%20Request"
            className="inline-block px-10 py-5 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:-translate-y-1"
          >
            Schedule Free Demo
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 py-12 px-6 text-center text-gray-500">
        <p className="mb-2">&copy; 2026 Dimer Fitness. All rights reserved.</p>
        <p>Contact: <a href="mailto:dimer.fitness@gmail.com" className="text-cyan-400 hover:text-cyan-300">dimer.fitness@gmail.com</a></p>
      </footer>
    </div>
  );
}
