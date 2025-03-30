import React, { useState } from "react";
import { Rocket, Menu, X, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const navItems = ["Home", "Feature", "About", "Help"];
const mobileItems = ["Home", "Auctions", "How It Works", "About"];

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleBtnClick = (e) => {
    e.preventDefault();
    navigate("auth/login");
  };

  return (
    <>
      {/* Navbar Container */}
      <nav className="fixed md:top-4 left-1/2 transform -translate-x-1/2 w-full max-w-3xl z-50 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-3xl border-b border-cyan-500/20 md:rounded-full rounded-none shadow-md shadow-cyan-500/10 ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            <Rocket className="h-8 w-8 text-cyan-400 relative" />
            <span className="text-white font-bold text-xl relative">
              NOVA
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Bid
              </span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <button className="relative group">
              <div className="absolute -inset-px rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/50" />
              <div className="absolute inset-0 rounded-full opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <button
                className="relative bg-black px-6 py-2 rounded-full border border-cyan-500/50 hover:border-cyan-500 text-cyan-400 flex items-center gap-2 cursor-pointer"
                onClick={handleBtnClick}
              >
                <Sparkles className="h-4 w-4 animate-pulse" />
                Launch Bid
              </button>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.div
            className="md:hidden"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* Bottom Drawer for Mobile Menu */}
      <div
        className={`fixed bottom-0 left-0 w-full  bg-black/5 backdrop-blur-3xl z-50 transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 ease-in-out md:hidden border-t border-cyan-500/20 rounded-t-4xl`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Rocket className="h-6 w-6 text-cyan-400" />
              <span className="text-white font-bold text-lg">
                NOVA<span className="text-cyan-400">Bid</span>
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-red-400 group"
            >
              <X className="h-6 w-6 transition duration-300 group-hover:rotate-90 group-hover:drop-shadow-[0_0_6px_#f87171]" />
            </button>
          </div>

          {/* Mobile Nav Items */}
          <div className="space-y-4">
            {mobileItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium border border-transparent hover:border-cyan-500/20 transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-8">
            <button className="relative group w-full">
              <div className="absolute -inset-px rounded-md bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/50" />
              <div className="absolute inset-0 rounded-full opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-black px-6 py-2 rounded-md border border-cyan-500/50 hover:border-cyan-500 text-cyan-400 flex items-center gap-2 justify-center">
                <button
                  className="flex items-center gap-2"
                  onClick={handleBtnClick}
                >
                  <Sparkles className="h-4 w-4 animate-pulse" />
                  Launch Bid
                </button>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
