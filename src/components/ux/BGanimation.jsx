import React from "react";

const BGanimation = () => {
  const starCount = 80;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {[...Array(starCount)].map((_, i) => {
        const size = `${Math.random() * 2 + 1}px`;
        const top = `${Math.random() * 100}%`;
        const left = `${Math.random() * 100}%`;
        const twinkleDelay = `${Math.random() * 5}s`;
        const twinkleDuration = `${2 + Math.random() * 4}s`;

        return (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top,
              left,
              width: size,
              height: size,
              opacity: Math.random() * 0.6 + 0.2,
              animationDelay: twinkleDelay,
              animationDuration: twinkleDuration,
              filter: "drop-shadow(0 0 4px white)",
            }}
          />
        );
      })}
    </div>
  );
};

export default BGanimation;
