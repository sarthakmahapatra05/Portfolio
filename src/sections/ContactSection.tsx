import { Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';
import { FadeIn } from '../components/FadeIn.tsx';

const contactData = [
  {
    title: 'Email',
    value: 'sarthakmahapatra303@gmail.com',
    href: 'mailto:sarthakmahapatra303@gmail.com',
    icon: Mail,
    color: 'text-red-400',
  },
  {
    title: 'Phone',
    value: '+91 9438826474',
    href: 'tel:+919438826474',
    icon: Phone,
    color: 'text-green-400',
  },
  {
    title: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://linkedin.com/in/sarthak-mahapatra303',
    icon: Linkedin,
    color: 'text-blue-400',
  },
  {
    title: 'GitHub',
    value: 'View my code',
    href: 'https://github.com/sarthakmahapatra05',
    icon: Github,
    color: 'text-emerald-400',
  },
];

export const ContactSection = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 md:px-10 bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-24">
          <FadeIn y={30} delay={0}>
            <h2 className="hero-heading text-[clamp(2.5rem,8vw,100px)] font-black uppercase leading-none tracking-tight mb-6">
              Get In Touch
            </h2>
          </FadeIn>
          <FadeIn y={20} delay={0.1}>
            <p className="text-[#D7E2EA]/60 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {contactData.map((contact, i) => (
            <FadeIn key={i} y={40} delay={i * 0.1}>
              <a
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group relative flex flex-col items-center justify-center p-8 sm:p-10 rounded-[30px] sm:rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 overflow-hidden"
              >
                {/* Decorative Background Glow */}
                <div className={`absolute -right-4 -top-4 w-24 h-24 blur-[60px] opacity-20 transition-opacity duration-500 group-hover:opacity-40 ${contact.color.replace('text-', 'bg-')}`} />
                
                <contact.icon className={`w-10 h-10 sm:w-12 sm:h-12 mb-6 sm:mb-8 transition-transform duration-500 group-hover:scale-110 ${contact.color}`} />
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 uppercase tracking-wider">
                  {contact.title}
                </h3>
                
                <p className="text-[#D7E2EA]/60 text-xs sm:text-sm text-center break-all flex items-center gap-1 group-hover:text-white transition-colors duration-300">
                  {contact.value}
                  {contact.href.startsWith('http') && <ExternalLink className="w-3 h-3 opacity-40 group-hover:opacity-100" />}
                </p>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
