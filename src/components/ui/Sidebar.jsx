import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Gavel, User, Settings, Rocket } from "lucide-react";

const menuItems = [
  { title: "Home", icon: <Home />, path: "/" },
  { title: "Auctions", icon: <Gavel />, path: "/auctions" },
  { title: "Profile", icon: <User />, path: "/profile" },
  { title: "Settings", icon: <Settings />, path: "/settings" },
];

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Large Screen Sidebar */}
      {!isMobile && (
        <motion.aside
          className="fixed left-0 top-0 h-full bg-gray-900 text-white p-4 flex flex-col items-start z-50 shadow-lg"
          initial={{ width: 64 }}
          animate={{ width: isExpanded ? 220 : 64 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          {/* Rocket Logo */}
          <div className="flex items-center justify-center w-full p-3">
            <Rocket className="text-cyan-400 text-3xl" />
          </div>

          <div className="flex flex-col flex-grow gap-4 mt-4">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center w-full p-3 cursor-pointer hover:bg-gray-800 rounded-lg"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-2xl">{item.icon}</span>
                {isExpanded && (
                  <span className="ml-4 text-lg">{item.title}</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* User Icon at Bottom */}
          <div className="mt-auto flex justify-center w-full p-3">
            <User className="text-white text-3xl cursor-pointer hover:text-cyan-400" />
          </div>
        </motion.aside>
      )}

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <motion.nav
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white p-3 rounded-2xl flex gap-6 shadow-lg w-11/12 justify-around"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-2 cursor-pointer hover:text-cyan-400"
              whileHover={{ scale: 1.2 }}
            >
              <span className="text-2xl">{item.icon}</span>
            </motion.div>
          ))}
        </motion.nav>
      )}
    </>
  );
};

export default Sidebar;
