interface LiveProjectButtonProps {
  className?: string;
  href?: string;
}

export const LiveProjectButton = ({ className = '', href = '#' }: LiveProjectButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5
        text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA]
        transition-all hover:bg-[#D7E2EA]/10 hover:scale-105 active:scale-95
        inline-flex items-center justify-center text-center
        ${className}
      `}
    >
      Live Project
    </a>
  );
};
