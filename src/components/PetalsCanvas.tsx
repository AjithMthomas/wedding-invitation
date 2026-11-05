import React, { useEffect, useRef, useState } from 'react';
import { Flower } from 'lucide-react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
  type: 'jasmine' | 'gold' | 'marigold';
}

export const PetalsCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isEnabled, setIsEnabled] = useState<boolean>(true);

  useEffect(() => {
    if (!isEnabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Color choices: Ivory Jasmine, Warm Gold flecks, Subtle Marigold
    const colors = {
      jasmine: 'rgba(248, 244, 236, 0.75)',
      gold: 'rgba(216, 196, 154, 0.65)',
      marigold: 'rgba(235, 172, 60, 0.55)',
    };

    const petalCount = window.innerWidth < 768 ? 20 : 38;
    const petals: Petal[] = [];

    for (let i = 0; i < petalCount; i++) {
      const type = Math.random() > 0.6 ? 'jasmine' : Math.random() > 0.5 ? 'marigold' : 'gold';
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 6,
        speedY: Math.random() * 1.2 + 0.6,
        speedX: (Math.random() - 0.5) * 0.8,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.5 + 0.4,
        color: colors[type],
        type,
      });
    }

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;

      ctx.beginPath();
      // Organic teardrop petal curve
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(p.size / 2, -p.size, p.size, -p.size / 2, 0, p.size);
      ctx.bezierCurveTo(-p.size, -p.size / 2, -p.size / 2, -p.size, 0, 0);
      ctx.fill();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.005) * 0.8 + p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        drawPetal(p);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isEnabled]);

  return (
    <>
      {isEnabled && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-30 w-full h-full"
        />
      )}

      {/* Floating Petals Toggle */}
      <button
        onClick={() => setIsEnabled(!isEnabled)}
        title={isEnabled ? 'Mute floral shower' : 'Enable floral shower'}
        className="fixed bottom-20 left-4 z-40 bg-[#45151D]/80 backdrop-blur-md border border-[#C5A45C]/40 hover:border-[#C5A45C] text-[#C5A45C] p-2.5 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 group"
      >
        <Flower className={`w-4 h-4 transition-transform group-hover:rotate-45 ${isEnabled ? 'text-[#D8C49A]' : 'opacity-40'}`} />
        <span className="sr-only">Toggle floral shower</span>
      </button>
    </>
  );
};

