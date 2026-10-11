import { useRef, useState, useEffect } from 'react';

// Lightweight, resilient canvas-based interactive constellation sphere
// Supports dynamic theme changes (Dark / Light) with high visual fidelity
export default function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const onResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', onResize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left - width / 2) * 0.002,
        y: (e.clientY - rect.top - height / 2) * 0.002,
      });
    };
    window.addEventListener('mousemove', onMouseMove);

    // Generate sphere vertices
    const points: { x: number; y: number; z: number; origX: number; origY: number; origZ: number }[] = [];
    const numPoints = 140;
    const radius = Math.min(width, height) * 0.35;

    for (let i = 0; i < numPoints; i++) {
      const theta = Math.acos(1 - 2 * (i + 0.5) / numPoints);
      const phi = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);
      points.push({ x, y, z, origX: x, origY: y, origZ: z });
    }

    let angleX = 0;
    let angleY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isLight = document.body.classList.contains('light');

      angleX += 0.004 + mousePos.y * 0.1;
      angleY += 0.006 + mousePos.x * 0.1;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      const centerX = width / 2;
      const centerY = height / 2;

      // Project points
      const projected = points.map((p) => {
        let x1 = p.origX * cosY - p.origZ * sinY;
        let z1 = p.origX * sinY + p.origZ * cosY;

        let y2 = p.origY * cosX - z1 * sinX;
        let z2 = p.origY * sinX + z1 * cosX;

        const fov = 400;
        const scale = fov / (fov + z2 + radius * 0.8);
        const x2D = centerX + x1 * scale;
        const y2D = centerY + y2 * scale;
        const alpha = Math.max(0.1, (z2 + radius) / (2 * radius));

        return { x: x2D, y: y2D, z: z2, alpha, scale };
      });

      // Connect nearby points
      ctx.lineWidth = 0.75;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 48) {
            const lineAlpha = (1 - dist / 48) * projected[i].alpha * (isLight ? 0.45 : 0.35);
            ctx.strokeStyle = isLight
              ? `rgba(37, 99, 235, ${lineAlpha})`
              : `rgba(96, 165, 250, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw glowing nodes
      projected.forEach((p) => {
        ctx.fillStyle = isLight
          ? `rgba(30, 58, 138, ${p.alpha * 0.9})`
          : `rgba(147, 197, 253, ${p.alpha * 0.9})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2 * p.scale, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos.x, mousePos.y]);

  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
      {/* Dynamic ambient halo */}
      <div className="absolute w-64 h-64 bg-blue-500/15 rounded-full blur-[90px] pointer-events-none" />
      <canvas
        ref={canvasRef}
        className="w-full h-full relative z-10 pointer-events-none"
      />
    </div>
  );
}
