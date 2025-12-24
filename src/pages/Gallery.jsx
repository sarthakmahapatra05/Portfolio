import React, { useState } from 'react';
import { X } from 'lucide-react';

const images = [
  { src: '/src/images/image1.jpeg', alt: 'Image 1' },
  { src: '/src/images/image2.jpeg', alt: 'Image 2' },
  { src: '/src/images/image3.jpeg', alt: 'Image 3' },
  { src: '/src/images/image4.jpeg', alt: 'Image 4' },
  { src: '/src/images/image7.jpeg', alt: 'Image 7' },
  { src: encodeURI('/src/images/WhatsApp .jpeg'), alt: 'WhatsApp 1' },
  { src: encodeURI('/src/images/WhatsApp Image 2025-12-24 .jpeg'), alt: 'WhatsApp 2' },
  { src: encodeURI('/src/images/WhatsApp Image 2025-12-24 at 02.06.59.jpeg'), alt: 'WhatsApp 3' },
  { src: encodeURI('/src/images/WhatsApp Image 2025-12-24 at 02.07.00.jpeg'), alt: 'WhatsApp 4' },
  { src: encodeURI('/src/images/WhatsApp Image 2025-12-24 at 02.07.01.jpeg'), alt: 'WhatsApp 5' },
  { src: encodeURI('/src/images/WhatsApp Image 2025-12-24 at 02.07.02.jpeg'), alt: 'WhatsApp 6' }
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Gallery</h1>
      <p className="text-slate-300 mb-8">Click any image to enlarge.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(img)}
            className="group bg-slate-800/40 p-1 rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <div className="relative w-full" style={{paddingTop: '75%'}}>
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
          <div className="relative max-w-4xl w-full">
            <button onClick={() => setSelected(null)} className="absolute top-3 right-3 p-2 rounded-full bg-white/10 hover:bg-white/20">
              <X className="w-6 h-6 text-white" />
            </button>
            <img src={selected.src} alt={selected.alt} className="w-full h-auto rounded-2xl object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}
