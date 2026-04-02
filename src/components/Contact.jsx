import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react'

const contactInfo = [
  { icon: Phone,         title: 'Call Us',      detail: '+91 98713 66691',   sub: 'Talk to our team',    href: 'tel:+919871366691',               color: 'bg-green-50 text-[#5a9e0f]' },
  { icon: MapPin,        title: 'Visit Us',     detail: 'B-4/2, Second Floor', sub: 'Model Town-1, Delhi', href: 'https://maps.google.com/?q=Model+Town+1+Delhi', color: 'bg-lime-50 text-lime-700' },
  { icon: Clock,         title: 'Hours',        detail: 'Mon–Sat: 6AM–9PM', sub: 'Sunday: 7AM–2PM',     href: null,                              color: 'bg-emerald-50 text-emerald-700' },
  { icon: MessageCircle, title: 'WhatsApp',     detail: '+91 98713 66691',   sub: 'Message us anytime',  href: 'https://wa.me/919871366691',      color: 'bg-teal-50 text-teal-700' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-green-50 text-[#5a9e0f] text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-green-100">
            Get In Touch
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            Contact <span className="text-[#5a9e0f]">Us</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Have questions about membership or want to visit? We'd love to hear from you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {contactInfo.map(item => (
            <div key={item.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-4`}>
                <item.icon className="w-6 h-6" />
              </div>
              <div className="text-sm font-semibold text-gray-500 mb-1">{item.title}</div>
              {item.href ? (
                <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="text-base font-bold text-gray-900 hover:text-[#5a9e0f] transition-colors block">
                  {item.detail}
                </a>
              ) : (
                <div className="text-base font-bold text-gray-900">{item.detail}</div>
              )}
              <div className="text-xs text-gray-400 mt-1">{item.sub}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">Find Us Here</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                We're located on the second floor of B-4/2 in Model Town-1.
                Look for the green Fitness Tree sign — you can't miss it!
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#5a9e0f] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">B-4/2, Second Floor, Model Town-1, Delhi</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#5a9e0f] flex-shrink-0" />
                  <a href="tel:+919871366691" className="text-sm text-gray-700 hover:text-[#5a9e0f] transition-colors">
                    +91 98713 66691
                  </a>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="tel:+919871366691"
                  className="bg-[#5a9e0f] text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#4a8a0c] transition-colors text-center">
                  Call Now
                </a>
                <a href="https://wa.me/919871366691" target="_blank" rel="noopener noreferrer"
                  className="border-2 border-[#5a9e0f] text-[#5a9e0f] font-semibold text-sm px-6 py-3 rounded-full hover:bg-green-50 transition-colors text-center">
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="min-h-[300px] md:min-h-0">
              <iframe title="Fitness Tree Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.458014847217!2d77.19233447550637!3d28.707764975629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd57e1b00001%3A0x2f7a9b4b5c6b7d8e!2sModel+Town+1%2C+Delhi!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                className="w-full h-full min-h-[300px]" style={{ border: 0 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
