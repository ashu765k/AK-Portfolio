import { useEffect, useState, useRef } from "react";

const StarryCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const requestRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTarget({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      setPosition((prev) => {
        const speed = 0.3; // 🔥 increase to move faster (0.1 = slow, 0.5 = fast)
        const x = prev.x + (target.x - prev.x) * speed;
        const y = prev.y + (target.y - prev.y) * speed;
        return { x, y };
      });
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [target]);

  if (!isVisible) return null;

  return (
    <div
      className="cursor-star"
      style={{
        left: position.x,
        top: position.y,
        position: "fixed",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default StarryCursor;
