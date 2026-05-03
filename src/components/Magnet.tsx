import { useState, useRef, ReactNode, useEffect } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [transition, setTransition] = useState(inactiveTransition);
  const magnetRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!magnetRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    if (
      Math.abs(distanceX) < width / 2 + padding &&
      Math.abs(distanceY) < height / 2 + padding
    ) {
      setTransition(activeTransition);
      setPosition({
        x: distanceX / strength,
        y: distanceY / strength,
      });
    } else {
      setTransition(inactiveTransition);
      setPosition({ x: 0, y: 0 });
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={magnetRef}
      className={className}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};
