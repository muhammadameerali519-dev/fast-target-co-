import React, { useRef, useState, useCallback } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glareOpacity?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 8,
  glareOpacity = 0.15,
  onClick,
  style = {},
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -maxTilt;
    const rotY = ((x - centerX) / centerX) * maxTilt;

    setTilt({ x: rotX, y: rotY });
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: glareOpacity,
    });
  }, [maxTilt, glareOpacity, shouldReduceMotion]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: isHovered && !shouldReduceMotion ? 1.015 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 25,
      }}
      style={{
        transformStyle: 'preserve-3d',
        ...style,
      }}
      className={`relative overflow-hidden transition-shadow duration-300 ${
        isHovered
          ? 'shadow-[0_20px_40px_-15px_rgba(2,132,199,0.18),0_0_1px_rgba(226,232,240,0.9)]'
          : 'shadow-[0_4px_16px_-2px_rgba(15,23,42,0.05),0_0_1px_rgba(226,232,240,0.8)]'
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Specular glare dynamic reflection */}
      {!shouldReduceMotion && (
        <div
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${glarePos.opacity}), transparent 80%)`,
            opacity: glarePos.opacity > 0 ? 1 : 0,
          }}
        />
      )}

      {/* Card Content with 3D transform preserve */}
      <div style={{ transform: isHovered && !shouldReduceMotion ? 'translateZ(10px)' : 'translateZ(0px)' }} className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};
