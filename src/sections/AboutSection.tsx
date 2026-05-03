import { FadeIn } from '../components/FadeIn.tsx';
import { AnimatedText } from '../components/AnimatedText.tsx';
import { ContactButton } from '../components/ContactButton.tsx';

export const AboutSection = () => {
  return (
    <section className="relative min-h-screen px-5 py-20 sm:px-8 md:px-10 overflow-hidden">
      {/* Decorative Icons - Hidden on small mobile for better focus */}
      {/* Top Left: Moon */}
      <FadeIn
        x={-80}
        y={0}
        delay={0.1}
        duration={0.9}
        className="absolute left-[1%] top-[4%] sm:left-[2%] md:left-[4%] w-[80px] sm:w-[160px] md:w-[210px] opacity-40 sm:opacity-100"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt=""
          className="w-full"
        />
      </FadeIn>

      {/* Bottom Left: 3D Object */}
      <FadeIn
        x={-80}
        y={0}
        delay={0.25}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[70px] sm:w-[140px] md:w-[180px] opacity-40 sm:opacity-100"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
          className="w-full"
        />
      </FadeIn>

      {/* Top Right: Lego */}
      <FadeIn
        x={80}
        y={0}
        delay={0.15}
        duration={0.9}
        className="absolute right-[1%] top-[4%] sm:right-[2%] md:right-[4%] w-[80px] sm:w-[160px] md:w-[210px] opacity-40 sm:opacity-100"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt=""
          className="w-full"
        />
      </FadeIn>

      {/* Bottom Right: 3D Group */}
      <FadeIn
        x={80}
        y={0}
        delay={0.3}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[90px] sm:w-[170px] md:w-[220px] opacity-40 sm:opacity-100"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
          className="w-full"
        />
      </FadeIn>

      {/* Content */}
      <div className="flex flex-col items-center justify-center gap-10 sm:gap-14 md:gap-16 pt-20 relative z-10">
        <FadeIn y={40} delay={0}>
          <h2 className="hero-heading text-center text-[clamp(2.5rem,10vw,160px)] font-black uppercase leading-none tracking-tight">
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24 w-full">
          <AnimatedText
            text="I'm a passionate Electronics & Communication Engineering student at Silicon University, specialized in MERN Stack development and AI-integrated platforms. I truly enjoy working with businesses that aim to stand out and present their best image through modern technology. Let's build something incredible together!"
            className="max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed px-4 sm:px-0"
          />

          <FadeIn y={30} delay={0.1}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
