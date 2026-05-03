import { FadeIn } from '../components/FadeIn.tsx';
import { Magnet } from '../components/Magnet.tsx';
import { ContactButton } from '../components/ContactButton.tsx';
import heroPhoto from '../images/herosection photo.png';

export const HeroSection = () => {
  return (
    <section className="relative flex h-screen flex-col overflow-hidden px-4 sm:px-6 md:px-10">
      {/* Navbar */}
      <FadeIn y={-20} delay={0}>
        <nav className="flex items-center justify-between pt-6 md:pt-8">
          {['About', 'Experience', 'Services', 'Projects', 'Awards', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[8px] sm:text-[10px] md:text-sm font-semibold uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 lg:text-[1.1rem]"
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading - Background Z-index */}
      <div className="relative z-0 mt-20 sm:mt-12 md:mt-8">
        <FadeIn y={40} delay={0.15}>
          <h1 className="hero-heading w-full text-center sm:text-left text-[7.5vw] sm:text-[10vw] md:text-[11vw] lg:text-[12vw] font-black uppercase leading-[0.8] tracking-tighter whitespace-nowrap">
            Hi, i&apos;m Sarthak
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait - Foreground Z-index */}
      <div className="absolute left-1/2 bottom-0 z-10 w-[280px] sm:w-[400px] md:w-[480px] lg:w-[560px] -translate-x-1/2 pointer-events-none">
        <FadeIn y={30} delay={0.6}>
          <Magnet
            padding={150}
            strength={2}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src={heroPhoto}
              alt="Sarthak Portrait"
              className="w-full object-contain"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="mt-auto flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 pb-8 sm:pb-10 relative z-20">
        <FadeIn y={20} delay={0.35} className="w-full sm:w-auto">
          <p className="max-w-none sm:max-w-[240px] md:max-w-[280px] text-center sm:text-left text-[10px] sm:text-[clamp(0.6rem,1.2vw,1.1rem)] font-light uppercase leading-tight tracking-widest text-[#D7E2EA] opacity-80">
            a full-stack developer driven by crafting striking and unforgettable digital experiences
          </p>
        </FadeIn>

        <FadeIn y={20} delay={0.5}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
