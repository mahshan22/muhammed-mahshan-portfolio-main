const bubbles = Array.from({ length: 25 });

const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">

      {bubbles.map((_, i) => {
        const size = Math.random() * 6 + 2; // 2px–8px
        const left = Math.random() * 100; // random horizontal
        const duration = Math.random() * 10 + 6; // speed
        const delay = Math.random() * 5;

        return (
          <span
            key={i}
            className="absolute bg-white rounded-full animate-bubble"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              bottom: `-${Math.random() * 100}px`,
              opacity: Math.random() * 0.5 + 0.2,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              boxShadow: "0 0 8px rgba(255, 255, 255, 0.6)",
            }}
          />
        );
      })}

    </div>
  );
};

export default FloatingParticles;