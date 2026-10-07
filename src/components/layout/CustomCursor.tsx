import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverElem = target.closest("[data-cursor]");
      if (hoverElem) {
        setHovering(true);
        setCursorText(hoverElem.getAttribute("data-cursor") || "VIEW");
      } else {
        setHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      className={`custom-cursor hidden md:block ${hovering ? "hovering" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      data-cursor-text={cursorText}
    />
  );
}
