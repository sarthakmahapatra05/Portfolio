import { HeroSection } from './sections/HeroSection.tsx';
import { MarqueeSection } from './sections/MarqueeSection.tsx';
import { AboutSection } from './sections/AboutSection.tsx';
import { ServicesSection } from './sections/ServicesSection.tsx';
import { ProjectsSection } from './sections/ProjectsSection.tsx';
import { ExperienceSection } from './sections/ExperienceSection.tsx';
import { AchievementsSection } from './sections/AchievementsSection.tsx';
import { ContactSection } from './sections/ContactSection.tsx';

function App() {
  return (
    <main className="overflow-x-clip bg-[#0C0C0C] font-kanit">
      <section id="home">
        <HeroSection />
      </section>
      
      <MarqueeSection />
      
      <section id="about">
        <AboutSection />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="awards">
        <AchievementsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
      
      <footer className="bg-[#0C0C0C] py-10 text-center border-t border-white/5">
        <p className="text-[#D7E2EA]/40 text-[10px] sm:text-sm uppercase tracking-[0.2em]">
          &copy; 2026 Sarthak Mahapatra -- Full Stack Developer
        </p>
      </footer>
    </main>
  );
}

export default App;
