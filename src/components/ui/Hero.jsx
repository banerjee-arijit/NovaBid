import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Gavel, Rocket } from "lucide-react";
import HeroVideoDialog from "../magicui/hero-video-dialog";
import BGanimation from "../ux/BGanimation";

const Hero = () => {
  return (
    <div>
      <section
        className="relative pt-12 overflow-hidden bg-black sm:pt-16 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('https://preview.cruip.com/open-pro/images/page-illustration.svg')`,
        }}
      >
        <BGanimation />
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mt-20">
          <div className="max-w-4xl mx-auto text-center">
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
                <Gavel className="w-4 h-4 text-cyan-400" />
              </motion.span>
              The Future of Digital Auctions
            </motion.div>

            <h1 className="text-4xl md:text-6xl text-white mb-6 leading-tight">
              Next-Gen Bidding for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Lightning-Fast Auctions
              </span>
            </h1>

            <div className="flex flex-col items-center justify-center px-8 mt-12 space-y-3 sm:space-y-0 sm:px-0 sm:space-x-5 sm:flex-row">
              <div className="relative inline-flex items-center justify-center w-full sm:w-auto group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <button className="relative inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full sm:w-auto gap-2 group cursor-pointer">
                  <Rocket className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <span>Start Bidding Now</span>
                </button>
              </div>

              <button className="inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white transition-all duration-200 bg-black border border-gray-600 rounded-full sm:w-auto hover:border-white">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative mt-12 -mb-4 sm:-mb-10 lg:-mb-12 sm:mt-16 lg:mt-24">
            <div className="absolute top-0 transform -translate-x-1/2 left-1/2">
              <svg
                className="blur-3xl filter"
                style={{ filter: "blur(64px)" }}
                width="645"
                height="413"
                viewBox="0 0 645 413"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M181.316 218.778C86.2529 123.715 -63.7045 134.94 31.3589 39.8762C126.422 -55.1873 528.427 41.1918 623.49 136.255C718.554 231.319 470.678 289.068 375.614 384.131C280.551 479.195 276.38 313.842 181.316 218.778Z"
                  fill="url(#d)"
                />
                <defs>
                  <linearGradient
                    id="d"
                    x1="665.741"
                    y1="178.506"
                    x2="296.286"
                    y2="474.62"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="cyan" />
                    <stop offset="100%" stopColor="purple" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="relative inset-0 flex justify-center">
              <HeroVideoDialog
                className="hidden dark:block md:h-270 h-220 w-280"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                thumbnailAlt="Hero Video"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
