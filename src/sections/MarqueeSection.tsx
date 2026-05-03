import { useEffect, useRef, useState } from 'react';

// Import images from src/images
import img1 from '../images/image1.jpeg';
import img2 from '../images/image2.jpeg';
import img3 from '../images/image3.jpeg';
import img4 from '../images/image4.jpeg';
import img7 from '../images/image7.jpeg';
import hero1 from '../images/herosection1.jpeg';
import hero2 from '../images/herosection2.jpeg';
import splash from '../images/splashscreenbg.jpeg';
import wa1 from '../images/WhatsApp Image 2025-12-24 at 02.06.59.jpeg';
import wa2 from '../images/WhatsApp Image 2025-12-24 at 02.07.00.jpeg';
import wa3 from '../images/WhatsApp Image 2025-12-24 at 02.07.01.jpeg';
import wa4 from '../images/WhatsApp Image 2025-12-24 at 02.07.02.jpeg';

const images = [
  img1, img2, img3, img4, img7, hero1, hero2, splash, wa1, wa2, wa3, wa4
];

export const MarqueeSection = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const offset = (window.scrollY - top + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Split images into two rows and triple them for seamless scrolling
  const row1 = [...images.slice(0, 6), ...images.slice(0, 6), ...images.slice(0, 6)];
  const row2 = [...images.slice(6), ...images.slice(6), ...images.slice(6)];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] py-10 pt-24 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3 overflow-hidden">
        {/* Row 1 - Moves RIGHT */}
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: `translateX(${scrollOffset - 200}px)`,
          }}
        >
          {row1.map((img, i) => (
            <div key={i} className="relative h-[180px] w-[280px] sm:h-[220px] sm:w-[340px] md:h-[270px] md:w-[420px] shrink-0 overflow-hidden rounded-2xl">
              <img
                src={img}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 hover:opacity-0" />
            </div>
          ))}
        </div>

        {/* Row 2 - Moves LEFT */}
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: `translateX(${-(scrollOffset - 200)}px)`,
          }}
        >
          {row2.map((img, i) => (
            <div key={i} className="relative h-[180px] w-[280px] sm:h-[220px] sm:w-[340px] md:h-[270px] md:w-[420px] shrink-0 overflow-hidden rounded-2xl">
              <img
                src={img}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 hover:opacity-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
