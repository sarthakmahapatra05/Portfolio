import { FadeIn } from '../components/FadeIn.tsx';

const experiences = [
  {
    company: 'Algotechinfo Services Pvt. Ltd.',
    role: 'Software Engineering Intern',
    period: '03/2025 - Present',
    location: 'Remote',
    description: [
      'Developed and optimized components of an algorithmic trading low latency platform, improving system efficiency and performance.',
      'Conducted research and implemented trading strategies based on market data and quantitative analysis.',
      'Collaborated on real-world trading system workflows, gaining hands-on experience in algorithmic trading infrastructure.',
    ],
  },
  {
    company: 'Codebeat',
    role: 'Full Stack Intern',
    period: '06/2025 - 06/2025',
    location: 'Bhubaneswar, Odisha, India',
    description: [
      'Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js.',
      'Built responsive frontends with React and implemented RESTful APIs with Express and Node.',
      'Managed backend logic and database operations using Node.js and MongoDB.',
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section className="bg-[#0C0C0C] py-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <FadeIn y={40} delay={0} className="mb-16 sm:mb-24">
          <h2 className="hero-heading text-[clamp(2.5rem,10vw,140px)] font-black uppercase leading-none tracking-tight">
            Experience
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-12 sm:gap-20">
          {experiences.map((exp, i) => (
            <FadeIn key={i} y={40} delay={i * 0.1}>
              <div className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 p-8 sm:p-12 rounded-[40px] border border-white/5 bg-white/[0.02] transition-all duration-500 hover:bg-white/[0.05] hover:border-white/10">
                {/* Year/Period */}
                <div className="md:col-span-3">
                  <span className="text-[#D7E2EA]/40 text-sm sm:text-base font-medium tracking-widest uppercase">
                    {exp.period}
                  </span>
                  <div className="mt-2 text-[#D7E2EA]/60 text-xs sm:text-sm font-light uppercase tracking-wider">
                    {exp.location}
                  </div>
                </div>

                {/* Role & Details */}
                <div className="md:col-span-9">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                    <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-lg sm:text-xl md:text-2xl font-light text-[#D7E2EA]/60 uppercase">
                      @ {exp.company}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-4">
                    {exp.description.map((item, j) => (
                      <li key={j} className="flex gap-4 text-[#D7E2EA]/70 text-sm sm:text-lg leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-white/20" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
