import { motion } from "framer-motion";

const rippleVariants = {
  animate: (i) => ({
    scale: [1, 1.3, 1],
    boxShadow: [
      "0px 10px 10px rgba(0,0,0,0.3)",
      "0px 30px 20px rgba(0,0,0,0.3)",
      "0px 10px 10px rgba(0,0,0,0.3)",
    ],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      delay: i * 0.2,
    },
  }),
};

const textVariants = {
  animate: {
    opacity: [1, 0.7, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Custom Cyan Grid Background with Radial Fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(0,184,219,0.1)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(0,184,219,0.1)_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>

      {/* Ripple Loader Animation */}
      <div className="relative w-[200px] aspect-square flex justify-center items-center z-[10]">
        {[4, 3, 2, 1, 0].map((i) => (
          <motion.div
            key={i}
            custom={i}
            variants={rippleVariants}
            animate="animate"
            className="absolute rounded-full border-t border-cyan-400 backdrop-blur-md"
            style={{
              inset: `${i * 10}%`,
              zIndex: 95 + i,
              background: `linear-gradient(0deg, rgba(0,184,219,0.1), rgba(0,184,219,0.05))`,
              borderColor: `rgba(0, 184, 219, ${0.2 + i * 0.2})`,
            }}
          />
        ))}

        <motion.div
          variants={textVariants}
          animate="animate"
          className="absolute inset-0 z-[99] flex flex-col items-center justify-center gap-2"
        ></motion.div>
      </div>

      <p className="mt-8 text-cyan-400 text-sm sm:text-base tracking-wide font-light animate-pulse z-[10]">
        Powering your futuristic auction experience...
      </p>
    </div>
  );
}
