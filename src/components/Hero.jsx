import gym1 from '../assets/WhatsApp_Image_2026-04-02_at_20.06.45_(1)_1775140871796.jpeg'

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${gym1})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-[#5a9e0f]/20 border border-[#5a9e0f]/40 text-[#a3e635] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-pulse" />
          Model Town-1, Delhi
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6 animate-fade-in-up">
          <span className="text-[#a3e635]">Fitness</span>{' '}
          <span className="text-white">Tree</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
          Where strength meets dedication. Your journey to a healthier, stronger you starts here.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <button onClick={() => scrollTo('#contact')}
            className="bg-[#5a9e0f] hover:bg-[#4a8a0c] text-white font-bold px-8 py-3.5 rounded-full text-base transition-all duration-200 shadow-lg hover:scale-105">
            Get Started Today
          </button>
          <button onClick={() => scrollTo('#gallery')}
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full text-base transition-all duration-200">
            View Gallery
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-in-up delay-400">
          {[
            { value: '10+',  label: 'Years Experience' },
            { value: '500+', label: 'Happy Members' },
            { value: '20+',  label: 'Equipment' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-[#a3e635]">{stat.value}</div>
              <div className="text-xs text-gray-300 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
