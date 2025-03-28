import { motion } from "framer-motion";
import { RefreshCw, Shield, Gavel, Star } from "lucide-react"; // Change Toolbox to Tools
import BGanimation from "../ux/BGanimation";
import { BellIcon, Share2Icon } from "lucide-react";

const Feature = () => {
  return (
    <section className="relative py-28 -mt-96 md:-mt-10 bg-black flex flex-col items-center">
      <BGanimation />

      <motion.div
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-6"
      >
        <motion.span
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <Star className="w-4 h-4 text-cyan-400" />
        </motion.span>
        Key Features of Our Platform
      </motion.div>

      <div
        className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]"
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
        }}
      ></div>
    </section>
  );
};

export default Feature;
