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
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import UserProfileDrawer from "./UserProfileDrawer";

const navItems = [
  { icon: <Home size={22} />, text: "Home", path: "/dashboard" },
  { icon: <Gavel size={22} />, text: "Auctions", path: "/dashboard/auction" },
];

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Drawer state

  const navigate = useNavigate();

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      <UserProfileDrawer open={isDrawerOpen} setOpen={setIsDrawerOpen} />

      {!isMobile && (
        <motion.div
          className="hidden md:flex"
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <aside className="min-h-screen">
            <nav className="h-full flex flex-col bg-[#111623] border-r border-[#00b8db33] shadow-lg w-full relative">
              <motion.div
                className="p-4 pb-2 flex justify-between items-center"
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className={`flex items-center text-cyan-400 font-bold tracking-widest text-lg transition-all duration-300 ${
                    expanded ? "w-40" : "w-0"
                  } overflow-hidden `}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Rocket className="w-6 h-6 text-[#00b8db]" />
                  </motion.div>
                  <span className="ml-2">NOVA Bid</span>
                </div>
                <motion.button
                  className="p-1.5 rounded-lg bg-[#1e293b] hover:bg-[#334155] text-cyan-400 transition-colors duration-300"
                  onClick={() => setExpanded((prev) => !prev)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {expanded ? <ChevronFirst /> : <ChevronLast />}
                </motion.button>
              </motion.div>

              <ul className="flex-1 px-3">
                {navItems.map((item, idx) => (
                  <SidebarItem
                    key={idx}
                    icon={item.icon}
                    text={item.text}
                    path={item.path}
                    active={idx === activeTab}
                    expanded={expanded}
                    onClick={() => setActiveTab(idx)}
                  />
                ))}
              </ul>

              {/* User Profile Button - Opens Drawer */}
              <motion.button
                className="border-t border-[#00b8db33] flex items-center p-3 cursor-pointer"
                whileHover={{ backgroundColor: "rgba(0, 184, 219, 0.05)" }}
                onClick={() => setIsDrawerOpen(true)} // Open Drawer
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-1"
                >
                  <User className="w-5 h-5 text-white" />
                </motion.div>
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
                  <motion.div
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MoreVertical size={20} className="ml-2 text-cyan-400" />
                  </motion.div>
                </div>
              </motion.button>
            </nav>
          </aside>
        </motion.div>
      )}
      {isMobile && (
        <motion.nav
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#111623]/90 backdrop-blur-lg text-white p-2 rounded-2xl flex gap-2 shadow-[0_0_15px_rgba(0,184,219,0.3)] w-11/12 justify-around border border-[#00b8db44]"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <AnimatePresence>
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col items-center p-2 cursor-pointer rounded-xl ${
                  index === activeTab ? "text-[#00b8db]" : "text-gray-400"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveTab(index);
                  navigate(item.path);
                }}
              >
                {index === activeTab && (
                  <motion.div
                    className="absolute inset-0 bg-[#00b8db]/10 rounded-xl"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 text-2xl">{item.icon}</span>
                <span className="relative z-10 text-xs mt-1 opacity-80">
                  {item.text}
                </span>
              </motion.div>
            ))}
            <motion.div
              className="relative flex flex-col items-center p-2 cursor-pointer rounded-xl text-gray-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDrawerOpen(true)}
            >
              <User className="relative z-10 text-2xl" />
              <span className="relative z-10 text-xs mt-1 opacity-80">
                Profile
              </span>
            </motion.div>
          </AnimatePresence>
        </motion.nav>
      )}
    </>
  );
};

const SidebarItem = ({ icon, text, active, expanded, path }) => {
  const navigate = useNavigate();
  return (
    <motion.li
      onClick={() => navigate(path)}
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors duration-300 group ${
        active
          ? "bg-gradient-to-r from-[#00b8db22] to-transparent text-[#00b8db]"
          : "text-gray-400 hover:bg-[#1e293b] hover:text-[#00b8db]"
      }`}
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div whileHover={{ scale: 1.1 }} className="relative">
        {React.cloneElement(icon, { className: "text-inherit" })}
      </motion.div>
      <span
        className={`transition-all duration-300 overflow-hidden ${
          expanded ? "w-32 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
    </motion.li>
  );
};

export default Sidebar;
