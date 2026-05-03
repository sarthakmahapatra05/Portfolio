import { FadeIn } from '../components/FadeIn.tsx';
import { Award, Trophy, Users } from 'lucide-react';

const achievements = [
  {
    title: 'Webtronics by SIPC',
    subtitle: '1st Prize Winner',
    description: 'Winner of the 1st prize in the Webtronics competition. Debugged and built advanced features for a complex full-stack website.',
    icon: Trophy,
    color: 'text-yellow-400',
  },
  {
    title: 'HackOdisha 5.0',
    subtitle: 'Participant & Project Contributor',
    description: 'Organised by NITR, Odisha. Developed Symptocare, a dockerized full-stack healthcare platform during the hackathon.',
    icon: Award,
    color: 'text-purple-400',
  },
  {
    title: 'IEEE Student Branch',
    subtitle: 'Member & Event Organizer',
    description: 'Active member of the IEEE Student Branch. Organized multiple technical events and enhanced leadership skills within the community.',
    icon: Users,
    color: 'text-blue-400',
  },
];

export const AchievementsSection = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 md:px-10 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] text-[#0C0C0C]">
      <div className="max-w-7xl mx-auto">
        <FadeIn y={40} delay={0} className="mb-16 sm:mb-24 text-center">
          <h2 className="text-[clamp(2.5rem,10vw,140px)] font-black uppercase leading-none tracking-tight">
            Awards & Recognition
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {achievements.map((item, i) => (
            <FadeIn key={i} y={40} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center p-8 sm:p-10 rounded-[40px] border border-[#0C0C0C]/5 bg-[#0C0C0C]/[0.02] transition-transform duration-500 hover:-translate-y-2">
                <item.icon className={`w-12 h-12 sm:w-16 sm:h-16 mb-6 sm:mb-8 ${item.color}`} />
                <h3 className="text-xl sm:text-2xl font-bold uppercase mb-2">
                  {item.title}
                </h3>
                <div className="text-sm sm:text-base font-medium text-[#0C0C0C]/60 uppercase tracking-widest mb-4">
                  {item.subtitle}
                </div>
                <p className="text-sm sm:text-base leading-relaxed opacity-80">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
