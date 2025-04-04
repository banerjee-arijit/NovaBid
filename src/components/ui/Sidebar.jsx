import {
  ChevronFirst,
  ChevronLast,
  Gavel,
  Home,
  User,
  Rocket,
  MoreVertical,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import UserProfileDrawer from "./UserProfileDrawer";
import useUserStore from "@/store/userStore";

const navItems = [
  { icon: Home, text: "Home", path: "/dashboard" },
  { icon: Gavel, text: "Auctions", path: "/dashboard/auction" },
];

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  const { user, fetchSession } = useUserStore();
  const { name, email } = user?.user_metadata || {};

  useEffect(() => {
    fetchSession();
  }, [fetchSession]);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    const handleResize = () => checkScreen();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <UserProfileDrawer open={isDrawerOpen} setOpen={setIsDrawerOpen} />
      {isMobile ? (
        <MobileNav setIsDrawerOpen={setIsDrawerOpen} />
      ) : (
        <DesktopNav
          expanded={expanded}
          setExpanded={setExpanded}
          name={name}
          email={email}
          setIsDrawerOpen={setIsDrawerOpen}
          currentPath={location.pathname}
        />
      )}
    </>
  );
};

const DesktopNav = ({
  expanded,
  setExpanded,
  name,
  email,
  setIsDrawerOpen,
  currentPath,
}) => (
  <motion.div
    className="hidden md:flex"
    initial={{ x: -250 }}
    animate={{ x: 0 }}
    transition={{ duration: 0.5, type: "spring" }}
  >
    <aside className="min-h-screen">
      <nav className="h-full flex flex-col  bg-[#0a0b0f] border-r border-[#00b8db33] shadow-lg w-full relative">
        <NavHeader expanded={expanded} setExpanded={setExpanded} />
        <NavItems expanded={expanded} currentPath={currentPath} />
        <UserProfile
          expanded={expanded}
          name={name}
          email={email}
          setIsDrawerOpen={setIsDrawerOpen}
        />
      </nav>
    </aside>
  </motion.div>
);

const NavHeader = ({ expanded, setExpanded }) => (
  <motion.div
    className="p-4 pb-2 flex justify-between items-center"
    whileHover={{ scale: 1.02 }}
  >
    <div
      className={`flex items-center text-cyan-400 font-bold tracking-widest text-lg transition-all duration-300 ${
        expanded ? "w-40" : "w-0"
      } overflow-hidden`}
    >
      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
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
);

const NavItems = ({ expanded, currentPath }) => (
  <ul className="flex-1 px-3 mt-10">
    {navItems.map((item) => (
      <SidebarItem
        key={item.path}
        Icon={item.icon}
        text={item.text}
        path={item.path}
        active={currentPath === item.path}
        expanded={expanded}
      />
    ))}
  </ul>
);

const SidebarItem = ({ Icon, text, active, expanded, path }) => {
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
        <Icon size={22} className="text-inherit" />
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

const UserProfile = ({ expanded, name, email, setIsDrawerOpen }) => (
  <motion.button
    className="border-t border-[#00b8db33] flex items-center p-3 cursor-pointer"
    whileHover={{ backgroundColor: "rgba(0, 184, 219, 0.05)" }}
    onClick={() => setIsDrawerOpen(true)}
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
        <h4 className="font-semibold">{name}</h4>
        <span className="text-xs text-gray-400">{email}</span>
      </div>
      <motion.div whileHover={{ rotate: 90 }} transition={{ duration: 0.2 }}>
        <MoreVertical size={20} className="ml-2 text-cyan-400" />
      </motion.div>
    </div>
  </motion.button>
);

const MobileNav = ({ setIsDrawerOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <motion.nav
      className="fixed bottom-4 left-1/2 z-999 transform -translate-x-1/2 bg-[#111623]/90 backdrop-blur-lg text-white p-2 rounded-2xl flex gap-2 shadow-[0_0_15px_rgba(0,184,219,0.3)] w-11/12 justify-around border border-[#00b8db44]"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <AnimatePresence>
        {navItems.map((item) => (
          <motion.div
            key={item.path}
            className={`relative flex flex-col items-center p-2 cursor-pointer rounded-xl ${
              location.pathname === item.path
                ? "text-[#00b8db]"
                : "text-gray-400"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(item.path)}
          >
            {location.pathname === item.path && (
              <motion.div
                className="absolute inset-0 bg-[#00b8db]/10 rounded-xl"
                layoutId="activeTab"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <item.icon size={22} className="relative z-10" />
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
          <User size={22} className="relative z-10" />
          <span className="relative z-10 text-xs mt-1 opacity-80">Profile</span>
        </motion.div>
      </AnimatePresence>
    </motion.nav>
  );
};

export default Sidebar;
