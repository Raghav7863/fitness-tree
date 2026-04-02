import gym2 from '../assets/WhatsApp_Image_2026-04-02_at_20.06.42_(1)_1775140871795.jpeg'
import { CheckCircle2, Dumbbell, TreePine, Heart } from 'lucide-react'

const features = [
  'State-of-the-art cardio equipment',
  'Dedicated weight training area',
  'Expert trainers available',
  'Welcoming atmosphere for all fitness levels',
  'Focus · Motivation · Dedication',
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#a3e635]/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#5a9e0f]/10 rounded-full blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={gym2} alt="Fitness Tree gym interior" className="w-full h-[440px] object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#5a9e0f] flex items-center justify-center">
                    <TreePine className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Fitness Tree</div>
                    <div className="text-gray-300 text-xs">Model Town-1, Delhi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-green-50 text-[#5a9e0f] text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-green-100">
              <Heart className="w-3.5 h-3.5" />
              About Us
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-5">
              More Than a Gym,<br />
              <span className="text-[#5a9e0f]">It's a Community</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Fitness Tree is a passionate fitness hub located in the heart of Model Town-1.
              We believe that every individual deserves a supportive environment to achieve
              their health and fitness goals — whether you're just starting out or pushing
              new personal records.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Our gym is built on the values of Focus, Motivation, and Dedication.
              With a wide range of cardio and strength equipment, we provide everything
              you need for a complete workout experience.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map(f => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5a9e0f] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-xl px-4 py-3">
                <Dumbbell className="w-6 h-6 text-[#5a9e0f]" />
                <div>
                  <div className="text-sm font-bold text-gray-900">20+ Machines</div>
                  <div className="text-xs text-gray-500">Modern equipment</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-xl px-4 py-3">
                <Heart className="w-6 h-6 text-[#5a9e0f]" />
                <div>
                  <div className="text-sm font-bold text-gray-900">500+ Members</div>
                  <div className="text-xs text-gray-500">Happy clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
