import { FadeIn } from '../components/FadeIn.tsx';

const services = [
  {
    number: '01',
    title: 'Frontend Mastery',
    description: 'Developing high-performance web applications using React.js, Next.js, and TypeScript. Expert in crafting responsive, accessible, and interactive user interfaces.',
  },
  {
    number: '02',
    title: 'Backend & APIs',
    description: 'Building secure and scalable server-side systems with Node.js, Express.js, and Flask. Implementation of JWT authentication and RESTful API security.',
  },
  {
    number: '03',
    title: 'Database Architecture',
    description: 'Designing and managing complex data schemas using MongoDB and Supabase to ensure high availability and data integrity for enterprise-grade apps.',
  },
  {
    number: '04',
    title: 'DevOps & Deployment',
    description: 'Proficient in containerization with Docker and Kubernetes, streamlining development workflows and ensuring consistent environment deployments.',
  },
  {
    number: '05',
    title: 'Algo & Problem Solving',
    description: 'Applying deep knowledge of Data Structures and Algorithms in C, Python, and Java to solve complex computational problems and optimize platform performance.',
  },
];

export const ServicesSection = () => {
  return (
    <section className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn y={40} delay={0} className="mb-16 sm:mb-20 md:mb-28 text-center">
        <h2 className="text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {services.map((service, i) => (
          <FadeIn
            key={i}
            delay={i * 0.1}
            className="group flex flex-col border-b border-[#0C0C0C]/15 py-8 sm:flex-row sm:py-10 md:py-12"
          >
            <div className="mb-4 text-[clamp(2.5rem,10vw,140px)] font-black leading-none sm:mb-0 sm:w-1/3">
              {service.number}
            </div>
            <div className="flex flex-col gap-2 sm:w-2/3">
              <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase">
                {service.title}
              </h3>
              <p className="max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
