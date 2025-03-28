import React, { useState } from "react";
import { Rocket, Menu, X, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#010101] fixed w-full z-50 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <Rocket className="h-8 w-8 text-cyan-400 relative" />
                <span className="text-white font-bold text-xl relative">
                  NOVA
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    Bid
                  </span>
                </span>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {["Home", "Freature", "About", "Help"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="relative group cursor-pointer">
              <div className="absolute -inset-px rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
              <div className="absolute inset-0 rounded-full opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black px-6 py-2 rounded-full border border-cyan-500/50 hover:border-cyan-500 text-cyan-400 transition duration-300 flex items-center gap-2">
                <Sparkles className="h-4 w-4 animate-pulse" />
                Launch Bid
              </div>
            </button>
          </div>

          <motion.div
            className="md:hidden"
            animate={{ y: [0, -2, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 cursor-pointer"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* BackGround Blur effect when menu is opend on the small devices */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
        ></div>
      )}

      {/* Bottom Drawer for Small Devices*/}
      <div
        className={`fixed bottom-0 left-0 w-full bg-black z-50 transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 ease-in-out md:hidden border-t border-cyan-500/20`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Rocket className="h-6 w-6 text-cyan-400" />
              <span className="text-white font-bold text-lg">
                NOVA<span className="text-cyan-400">Bid</span>
              </span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-red-400 cursor-pointer group"
            >
              <X className="h-6 w-6 transition duration-300 group-hover:rotate-90 group-hover:drop-shadow-[0_0_6px_#f87171]" />
            </button>
          </div>

          <div className="space-y-4">
            {["Home", "Auctions", "How It Works", "About"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium border border-transparent hover:border-cyan-500/20 transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="mt-8">
            <button className="relative group cursor-pointer w-full">
              <div className="absolute -inset-px rounded-md bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
              <div className="absolute inset-0 rounded-full opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black px-6 py-2 rounded-md border border-cyan-500/50 hover:border-cyan-500 text-cyan-400 transition duration-300 flex items-center gap-2 justify-center">
                <Sparkles className="h-4 w-4 animate-pulse" />
                Launch Bid
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
