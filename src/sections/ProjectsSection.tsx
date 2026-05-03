import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { LiveProjectButton } from '../components/LiveProjectButton.tsx';
import { FadeIn } from '../components/FadeIn.tsx';

const projects = [
  {
    id: '01',
    category: 'Full Stack',
    name: 'Symptocare',
    description: 'A healthcare platform combining AI-assisted symptom analysis, role-based access, and patient-provider collaboration for modern digital care.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Docker', 'WebSockets'],
    liveUrl: 'https://symptocare-sable.vercel.app/',
  },
  {
    id: '02',
    category: 'ML & Full Stack',
    name: 'Stroke Prediction',
    description: 'A full-stack web app for estimating stroke risk from patient inputs using a Flask backend API and React frontend with real-time probability output.',
    techStack: ['React 19', 'TypeScript', 'Flask', 'Python', 'ML Baseline'],
    liveUrl: 'https://github.com/sarthakmahapatra05/Stroke-Prediction-Tool',
  },
  {
    id: '03',
    category: 'Open Source',
    name: 'Vaccination Portal',
    description: 'A comprehensive web application for managing COVID-19 vaccination appointments, focused on enhancing user interface and accessibility.',
    techStack: ['React.js', 'Node.js', 'MongoDB', 'JavaScript', 'Tailwind CSS'],
    liveUrl: 'https://github.com/sarthakmahapatra05/Vaccination_Portal',
  },
  {
    id: '04',
    category: 'FinTech',
    name: 'Algo Trading Page',
    description: 'An indicator-based algo trading platform with real-time data visualization and automated trading features.',
    techStack: ['React.js', 'Node.js', 'JavaScript', 'GSAP', 'Framer Motion'],
    liveUrl: 'https://www.123algotrading.com/',
  },
];

export const ProjectsSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      ref={container}
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] pb-20 sm:-mt-12 sm:rounded-t-[50px] md:-mt-14 md:rounded-t-[60px]"
    >
      <div className="flex flex-col items-center py-20">
        <FadeIn y={40}>
          <h2 className="hero-heading text-[clamp(2.5rem,10vw,160px)] font-black uppercase leading-none tracking-tight">
            Projects
          </h2>
        </FadeIn>
      </div>

      <div className="flex flex-col gap-10 sm:gap-20 px-4 sm:px-6 md:px-10">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - 1 - i) * 0.03;
          return (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              range={[i * (1 / projects.length), 1]}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: any;
  index: number;
  range: [number, number];
  targetScale: number;
  progress: any;
}

const ProjectCard = ({
  project,
  index,
  range,
  targetScale,
  progress,
}: ProjectCardProps) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-20 sm:top-24 md:top-32 flex min-h-[50vh] sm:h-[80vh] items-center justify-center mb-10 sm:mb-0">
      <motion.div
        ref={container}
        style={{
          scale,
          top: `calc(-2vh + ${index * 20}px)`,
        }}
        className="relative flex h-auto sm:h-full w-full max-w-7xl flex-col rounded-[30px] sm:rounded-[50px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-10 md:rounded-[60px] md:p-14 shadow-2xl overflow-hidden"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 sm:pb-12 border-b border-[#D7E2EA]/10">
          <div className="flex items-center gap-3 sm:gap-6">
            <span className="text-[clamp(1.5rem,6vw,110px)] font-black leading-none text-[#D7E2EA]">
              {project.id}
            </span>
            <div className="flex flex-col">
              <span className="text-[8px] sm:text-xs uppercase tracking-widest text-[#D7E2EA]/60">
                {project.category}
              </span>
              <h3 className="text-sm sm:text-3xl md:text-4xl font-bold uppercase text-[#D7E2EA] leading-tight">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton 
            href={project.liveUrl}
            className="scale-[0.5] sm:scale-100 origin-right" 
          />
        </div>

        <div className="flex flex-col flex-1 justify-center py-6 sm:py-0">
          <p className="text-[#D7E2EA]/80 text-[10px] sm:text-xl md:text-2xl mb-6 sm:mb-10 max-w-3xl leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {project.techStack.map((tech: string) => (
              <span 
                key={tech} 
                className="px-2.5 py-1 sm:px-5 sm:py-2.5 rounded-full border border-[#D7E2EA]/20 bg-[#D7E2EA]/5 text-[#D7E2EA] text-[8px] sm:text-sm md:text-lg font-medium tracking-wide uppercase"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
