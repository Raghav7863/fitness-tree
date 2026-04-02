const mantras = [
  { status: 'ON',  text: 'FOCUS',      isOn: true  },
  { status: 'ON',  text: 'MOTIVATION', isOn: true  },
  { status: 'ON',  text: 'DEDICATION', isOn: true  },
  { status: 'OFF', text: 'EXCUSES',    isOn: false },
]

export default function Motivation() {
  return (
    <section className="py-16 bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400 text-sm uppercase tracking-widest mb-10">Our Philosophy</p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {mantras.map(m => (
            <div key={m.text} className="flex items-center gap-3">
              <div className={`relative w-10 h-6 rounded-full flex items-center px-0.5 ${m.isOn ? 'bg-[#5a9e0f]' : 'bg-red-600'}`}>
                <div className={`w-4 h-4 rounded-full bg-white shadow-md transition-transform ${m.isOn ? 'translate-x-4' : 'translate-x-0.5'}`} />
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className={`text-[10px] font-bold ${m.isOn ? 'text-[#a3e635]' : 'text-red-400'}`}>{m.status}</span>
                </div>
              </div>
              <span className={`text-xl sm:text-2xl font-extrabold tracking-tight ${m.isOn ? 'text-white' : 'text-gray-500'}`}>
                {m.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
