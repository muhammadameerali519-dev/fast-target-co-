import React, { useEffect, useRef } from 'react';

export const HeroVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates for 3D parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let rotX = 0;
    let rotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - width / 2;
      const y = e.clientY - rect.top - height / 2;
      mouseX = x / (width / 2);
      mouseY = y / (height / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Generate 3D Sphere Points
    const numPoints = 140;
    const radius = Math.min(width, height) * 0.36;
    const points: { x: number; y: number; z: number; baseR: number; pulseSpeed: number; color: string }[] = [];

    for (let i = 0; i < numPoints; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = Math.random() * Math.PI * 2;
        points.push({
        x: radius * Math.sin(theta) * Math.cos(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(theta),
        baseR: Math.random() * 2.2 + 1.2,
        pulseSpeed: Math.random() * 0.05 + 0.02,
        color: Math.random() > 0.4 ? '#0284c7' : Math.random() > 0.5 ? '#2563eb' : '#0ea5e9',
      });
    }

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse rotation interpolation
      targetRotX = mouseY * 0.4;
      targetRotY = mouseX * 0.5 + time * 0.3;
      rotX += (targetRotX - rotX) * 0.05;
      rotY += (targetRotY - rotY) * 0.05;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      const centerX = width / 2;
      const centerY = height / 2;
      const fov = 450;

      // Draw glowing central orb
      const gradient = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, radius * 1.1);
      gradient.addColorStop(0, 'rgba(14, 165, 233, 0.18)');
      gradient.addColorStop(0.4, 'rgba(37, 99, 235, 0.08)');
      gradient.addColorStop(0.8, 'rgba(224, 242, 254, 0.04)');
      gradient.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.15, 0, Math.PI * 2);
      ctx.fill();

      // Project 3D points to 2D
      const projected = points.map((p) => {
        // Rotate around Y
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;

        // Rotate around X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Perspective scale
        const scale = fov / (fov + z2);
        const px = centerX + x1 * scale;
        const py = centerY + y2 * scale;
        const alpha = Math.max(0.15, (z2 + radius) / (2 * radius));

        return { px, py, scale, z2, alpha, color: p.color, baseR: p.baseR };
      });

      // Sort by Z for realistic depth
      projected.sort((a, b) => a.z2 - b.z2);

      // Draw interconnecting network lines
      ctx.lineWidth = 0.9;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].px - projected[j].px;
          const dy = projected[i].py - projected[j].py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 65) {
            const lineAlpha = (1 - dist / 65) * 0.35 * projected[i].alpha * projected[j].alpha;
            ctx.strokeStyle = `rgba(2, 132, 199, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].px, projected[i].py);
            ctx.lineTo(projected[j].px, projected[j].py);
            ctx.stroke();
          }
        }
      }

      // Draw Orbiting Rings
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotY * 0.6);
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.25)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.ellipse(0, 0, radius * 1.2, radius * 0.45, Math.PI / 4, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(14, 165, 233, 0.22)';
      ctx.beginPath();
      ctx.ellipse(0, 0, radius * 1.35, radius * 0.35, -Math.PI / 5, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Draw 3D Points with Glow
      for (const p of projected) {
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#0284c7';

        ctx.beginPath();
        ctx.arc(p.px, p.py, p.baseR * p.scale, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;
      }
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] flex items-center justify-center pointer-events-none select-none">
      {/* Radial soft backdrop glow */}
      <div className="absolute w-72 h-72 rounded-full bg-sky-200/50 blur-3xl pointer-events-none" />
      <canvas ref={canvasRef} className="w-full h-full pointer-events-auto" />
    </div>
  );
};
