import React, { useEffect, useState, type ReactNode, type CSSProperties, type MouseEvent } from 'react';
 
interface MotionDivProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  initial?: { opacity?: number; y?: number; x?: number; scale?: number };
  animate?: { opacity?: number; y?: number; x?: number; scale?: number };
  transition?: { duration?: number; delay?: number; ease?: string };
  exit?: { opacity?: number; y?: number };
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}
 
const MotionDiv: React.FC<MotionDivProps> = ({
  children,
  className = '',
  style,
  initial,
  animate,
  transition,
  onClick,
}) => {
  const [mounted, setMounted] = useState(false);
 
  useEffect(() => {
    const delay = (transition?.delay || 0) * 1000;
    const timer = setTimeout(() => setMounted(true), delay + 16);
    return () => clearTimeout(timer);
  }, [transition?.delay]);
 
  const duration = transition?.duration ?? 0.4;
  const delay = transition?.delay ?? 0;
 
  const initialStyles: CSSProperties = {};
  const animateStyles: CSSProperties = {};
 
  if (initial) {
    if (initial.opacity !== undefined) initialStyles.opacity = initial.opacity;
    const transforms: string[] = [];
    if (initial.y !== undefined) transforms.push(`translateY(${initial.y}px)`);
    if (initial.x !== undefined) transforms.push(`translateX(${initial.x}px)`);
    if (initial.scale !== undefined) transforms.push(`scale(${initial.scale})`);
    if (transforms.length) initialStyles.transform = transforms.join(' ');
  }
 
  if (animate) {
    if (animate.opacity !== undefined) animateStyles.opacity = animate.opacity;
    const transforms: string[] = [];
    if (animate.y !== undefined) transforms.push(`translateY(${animate.y}px)`);
    if (animate.x !== undefined) transforms.push(`translateX(${animate.x}px)`);
    if (animate.scale !== undefined) transforms.push(`scale(${animate.scale})`);
    if (transforms.length) animateStyles.transform = transforms.join(' ');
  }
 
  const currentStyles = mounted ? animateStyles : initialStyles;
 
  return (
    <div
      className={className}
      style={{
        ...style,
        ...currentStyles,
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
 
export const motion = { div: MotionDiv };
export const AnimatePresence: React.FC<{ children: ReactNode; mode?: string }> = ({ children }) => <>{children}</>;
