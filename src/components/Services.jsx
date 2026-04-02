import { Bike, Dumbbell, TrendingUp, Users, Clock, Star } from 'lucide-react'

const services = [
  { icon: Dumbbell,   title: 'Strength Training',    desc: 'Full range of free weights, barbells, and resistance machines for building muscle and power.',       color: 'bg-green-50 text-[#5a9e0f]' },
  { icon: Bike,       title: 'Cardio Zone',           desc: 'Treadmills, ellipticals, stationary bikes, and cross trainers for every fitness level.',             color: 'bg-lime-50 text-lime-700' },
  { icon: TrendingUp, title: 'Weight Loss Programs',  desc: 'Structured workout plans tailored to help you burn fat and achieve your ideal physique.',            color: 'bg-emerald-50 text-emerald-700' },
  { icon: Users,      title: 'Personal Training',     desc: 'One-on-one guidance from experienced trainers who create customized workout programs.',              color: 'bg-teal-50 text-teal-700' },
  { icon: Clock,      title: 'Flexible Hours',        desc: 'Open early morning to late evening so you can train whenever it suits your schedule.',               color: 'bg-green-50 text-[#5a9e0f]' },
  { icon: Star,       title: 'Beginner Friendly',     desc: 'A welcoming environment where beginners get the guidance they need to start strong.',               color: 'bg-lime-50 text-lime-700' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-green-50 text-[#5a9e0f] text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-green-100">
            What We Offer
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            Our <span className="text-[#5a9e0f]">Services</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Everything you need under one roof to crush your fitness goals and stay motivated.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.title}
              className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#3d7009] to-[#5a9e0f] rounded-2xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">Ready to Transform Your Life?</h3>
          <p className="text-green-100 text-base mb-6 max-w-lg mx-auto">
            Join hundreds of members who have already made Fitness Tree their second home.
          </p>
          <a href="tel:+919871366691"
            className="inline-block bg-white text-[#5a9e0f] font-bold px-8 py-3 rounded-full hover:bg-green-50 transition-colors text-sm shadow-lg">
            Call Us: +91 98713 66691
          </a>
        </div>
      </div>
    </section>
  )
}
