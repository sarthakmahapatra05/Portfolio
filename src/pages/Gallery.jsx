import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import DomeGallery from '../components/DomeGallery';

export default function Gallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (!galleryRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gallery-shell',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
      );
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      ref={galleryRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full min-h-screen px-3 sm:px-6 gallery-page-bg"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="section-title pt-6 sm:pt-8 pb-3 text-center text-2xl sm:text-5xl font-semibold tracking-wide bg-gradient-to-r from-amber-200 via-stone-100 to-emerald-200 bg-clip-text text-transparent"
      >
        Visual Gallery
      </motion.h2>
      <div className="gallery-shell w-full h-[62dvh] min-h-[420px] sm:min-h-[520px] sm:h-[78dvh] max-h-[820px]">
        <DomeGallery
          fit={0.45}
          minRadius={220}
          maxRadius={760}
          padFactor={0.18}
          imageBorderRadius="20px"
          openedImageBorderRadius="18px"
          openedImageWidth="min(88vw, 420px)"
          openedImageHeight="min(72dvh, 420px)"
        />
      </div>
    </motion.div>
  );
}
