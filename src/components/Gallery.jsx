import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

import img1  from '../assets/WhatsApp_Image_2026-04-02_at_20.06.41_1775140871794.jpeg'
import img2  from '../assets/WhatsApp_Image_2026-04-02_at_20.06.42_(1)_1775140871795.jpeg'
import img3  from '../assets/WhatsApp_Image_2026-04-02_at_20.06.42_1775140871795.jpeg'
import img4  from '../assets/WhatsApp_Image_2026-04-02_at_20.06.43_(1)_1775140871795.jpeg'
import img5  from '../assets/WhatsApp_Image_2026-04-02_at_20.06.43_1775140871795.jpeg'
import img6  from '../assets/WhatsApp_Image_2026-04-02_at_20.06.44_(1)_1775140871796.jpeg'
import img7  from '../assets/WhatsApp_Image_2026-04-02_at_20.06.44_1775140871796.jpeg'
import img8  from '../assets/WhatsApp_Image_2026-04-02_at_20.06.45_(1)_1775140871796.jpeg'
import img9  from '../assets/WhatsApp_Image_2026-04-02_at_20.06.45_(2)_1775140871796.jpeg'
import img10 from '../assets/WhatsApp_Image_2026-04-02_at_20.06.45_1775140871797.jpeg'
import img11 from '../assets/WhatsApp_Image_2026-04-02_at_20.06.40_1775140871797.jpeg'
import img12 from '../assets/WhatsApp_Image_2026-04-02_at_20.06.41_(1)_1775140871797.jpeg'

const images = [
  { src: img1,  alt: 'Cardio area with treadmills' },
  { src: img2,  alt: 'Fitness Tree gym floor view' },
  { src: img3,  alt: 'Elliptical and cross trainers' },
  { src: img4,  alt: 'Green room with treadmills' },
  { src: img5,  alt: 'Modern treadmill section' },
  { src: img6,  alt: 'Bright green workout area' },
  { src: img7,  alt: 'Cardio equipment area' },
  { src: img8,  alt: 'Fitness Tree branding wall' },
  { src: img9,  alt: 'Full gym overview' },
  { src: img10, alt: 'Fitness Tree logo wall' },
  { src: img11, alt: 'Classic gym section' },
  { src: img12, alt: 'Equipment row' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  const prev = () => setLightbox(i => (i - 1 + images.length) % images.length)
  const next = () => setLightbox(i => (i + 1) % images.length)

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-green-50 text-[#5a9e0f] text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-green-100">
            Our Space
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            Inside <span className="text-[#5a9e0f]">Fitness Tree</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Take a look around our gym — a place designed for serious training and positive energy.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((img, idx) => (
            <div key={idx} onClick={() => setLightbox(idx)}
              className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square shadow-sm hover:shadow-xl transition-all duration-300">
              <img src={img.src} alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-[#5a9e0f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-white/80 hover:text-white p-2" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            onClick={e => { e.stopPropagation(); prev() }}>
            <ChevronLeft className="w-7 h-7" />
          </button>
          <img src={images[lightbox].src} alt={images[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            onClick={e => e.stopPropagation()} />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            onClick={e => { e.stopPropagation(); next() }}>
            <ChevronRight className="w-7 h-7" />
          </button>
          <div className="absolute bottom-4 text-white/60 text-sm">{lightbox + 1} / {images.length}</div>
        </div>
      )}
    </section>
  )
}
