import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices or fine pointer absent
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [role="button"], input, textarea, [data-cursor]');
      if (interactive) {
        setIsHovering(true);
        const customText = interactive.getAttribute('data-cursor');
        setCursorText(customText || '');
      } else {
        setIsHovering(false);
        setCursorText('');
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeave);

    // Smooth trailing animation loop
    let animId: number;
    const animateTrailer = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      animId = requestAnimationFrame(animateTrailer);
    };
    animId = requestAnimationFrame(animateTrailer);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [position.x, position.y, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Ring */}
      <div
        className={`custom-cursor hidden md:flex items-center justify-center pointer-events-none transition-transform duration-75 ${
          isHovering ? 'hovering' : ''
        }`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
        }}
      >
        {cursorText && (
          <span className="text-[9px] font-bold tracking-widest text-blue-300 uppercase select-none">
            {cursorText}
          </span>
        )}
      </div>

      {/* Inner Pin Dot */}
      <div
        className="custom-cursor-dot hidden md:block pointer-events-none"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
}
