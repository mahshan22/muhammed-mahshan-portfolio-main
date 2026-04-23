import { useRef } from "react";

const HeroImage = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 20;
    const rotateY = (x - rect.width / 2) / 20;

    ref.current!.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <div
      className="relative flex justify-center items-center perspective"
    >
      {/* Glow */}
      <div className="absolute w-[420px] h-[420px] bg-yellow-400/30 blur-[120px] rounded-full"></div>

      {/* Image */}
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="transition-transform duration-200"
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src="/ghibli.png"
          alt="Mahshan"
          className="w-[320px] md:w-[400px] animate-float"
        />
      </div>

      {/* Particles */}
      <span className="particle"></span>
      <span className="particle"></span>
      <span className="particle"></span>
    </div>
  );
};

export default HeroImage;