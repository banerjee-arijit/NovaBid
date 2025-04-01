import {
  ChevronFirst,
  ChevronLast,
  Gavel,
  Settings,
  Home,
  User,
  Rocket,
  MoreVertical,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { icon: <Home size={22} />, text: "Home", active: true },
  { icon: <Gavel size={22} />, text: "Auctions" },
  { icon: <User size={22} />, text: "Profile" },
  { icon: <Settings size={22} />, text: "Settings" },
];

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleToggle = () => setExpanded((prev) => !prev);

  return (
    <>
      {/* Desktop Sidebar */}
      {!isMobile && (
        <div className="hidden md:flex">
          <aside className="min-h-screen">
            <nav className="h-full flex flex-col bg-[#111623] border-r border-[#00b8db33] shadow-lg w-full">
              {/* Logo and Toggle */}
              <div className="p-4 pb-2 flex justify-between items-center">
                <div
                  className={`flex items-center text-cyan-400 font-bold tracking-widest text-lg transition-all duration-300 ${
                    expanded ? "w-40" : "w-0"
                  } overflow-hidden`}
                >
                  <Rocket className="w-6 h-6 text-[#00b8db]" />
                  <span className="ml-2">NOVA Bid</span>
                </div>
                <button
                  className="p-1.5 rounded-lg bg-[#1e293b] hover:bg-[#334155] text-cyan-400"
                  onClick={handleToggle}
                >
                  {expanded ? <ChevronFirst /> : <ChevronLast />}
                </button>
              </div>

              {/* Sidebar Items */}
              <ul className="flex-1 px-3">
                {navItems.map((item, idx) => (
                  <SidebarItem
                    key={idx}
                    icon={item.icon}
                    text={item.text}
                    active={item.active}
                    expanded={expanded}
                  />
                ))}
              </ul>

              <div className="border-t border-[#00b8db33] flex items-center p-3">
                <User className="w-5 h-5 text-[#00b8db]" />
                <div
                  className={`flex justify-between items-center overflow-hidden transition-all duration-300 ${
                    expanded ? "w-52 ml-3" : "w-0"
                  }`}
                >
                  <div className="leading-4 text-white">
                    <h4 className="font-semibold">Arijit</h4>
                    <span className="text-xs text-gray-400">
                      arijit@gmail.com
                    </span>
                  </div>
                  <MoreVertical size={20} className="ml-2 text-cyan-400" />
                </div>
              </div>
            </nav>
          </aside>
        </div>
      )}

      {isMobile && (
        <motion.nav
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#0f172a] text-white p-3 rounded-2xl flex gap-6 shadow-xl w-11/12 justify-around border border-[#00b8db44]"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center p-2 cursor-pointer ${
                item.active ? "text-[#00b8db]" : "text-gray-400"
              }`}
              whileHover={{ scale: 1.2 }}
            >
              <span className="text-4xl">{item.icon}</span>
            </motion.div>
          ))}
        </motion.nav>
      )}
    </>
  );
};

const SidebarItem = ({ icon, text, active, expanded }) => {
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-all duration-300 group ${
        active
          ? "bg-[#00b8db22] text-[#00b8db]"
          : "text-gray-400 hover:bg-[#1e293b] hover:text-[#00b8db]"
      }`}
    >
      {React.cloneElement(icon, {
        className: "text-inherit",
      })}
      <span
        className={`transition-all duration-300 overflow-hidden ${
          expanded ? "w-32 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>

      {/* Tooltip when collapsed */}
      {!expanded && (
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-[#0f172a] border border-cyan-500 text-cyan-300 text-sm px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10">
          {text}
        </div>
      )}
    </li>
  );
};

export default Sidebar;
