"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  UserCircle,
  Edit,
  Calendar,
  Box,
  DollarSign,
  Truck,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";

const UserProfileDrawer = ({ open, setOpen }) => {
  const [userName, setUserName] = React.useState("Arijit");
  const [userEmail, setUserEmail] = React.useState("arijit@gmail.com");
  const [isEditing, setIsEditing] = React.useState(false);
  const [myProducts, setMyProducts] = React.useState(12);
  const [totalRevenue, setTotalRevenue] = React.useState(10500);

  const today = new Date().toLocaleDateString();

  const menuItems = [
    { icon: Bell, label: "Notifications", count: 3 },
    { icon: Settings, label: "Settings" },
    { icon: LogOut, label: "Logout" },
  ];

  const drawerVariants = {
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    open: {
      x: "0%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black z-40"
          />

          {/* Drawer */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={drawerVariants}
            className="fixed right-0 top-0 h-full w-full md:w-[400px] bg-[#111623] text-white z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-[#111623]/90 backdrop-blur-sm z-10 p-6 border-b border-cyan-500/20">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-cyan-400">Profile</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 hover:bg-cyan-500/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-cyan-400" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-8">
              {/* Profile Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-1">
                    <div className="w-full h-full rounded-full bg-[#1a2234] flex items-center justify-center">
                      <UserCircle className="w-16 h-16 text-cyan-400" />
                    </div>
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-full bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  />
                </motion.div>

                <div className="mt-4 text-center">
                  {isEditing ? (
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="bg-transparent text-center text-xl font-bold border-b-2 border-cyan-500 focus:outline-none"
                    />
                  ) : (
                    <h3 className="text-xl font-bold">{userName}</h3>
                  )}
                  {isEditing ? (
                    <input
                      type="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="bg-transparent text-center text-sm text-gray-400 mt-1 border-b-2 border-cyan-500 focus:outline-none"
                    />
                  ) : (
                    <p className="text-sm text-gray-400 mt-1">{userEmail}</p>
                  )}
                </div>

                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="mt-4 px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full hover:bg-cyan-500/20 transition-colors flex items-center gap-2"
                >
                  <Edit className="w-4 h-4" />
                  {isEditing ? "Save Profile" : "Edit Profile"}
                </button>
              </motion.div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#1a2234] p-4 rounded-xl border border-cyan-500/20"
                >
                  <Box className="text-cyan-400 mb-2" />
                  <p className="text-sm text-gray-400">Products</p>
                  <p className="text-xl font-bold">{myProducts}</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#1a2234] p-4 rounded-xl border border-cyan-500/20"
                >
                  <DollarSign className="text-cyan-400 mb-2" />
                  <p className="text-sm text-gray-400">Revenue</p>
                  <p className="text-xl font-bold">${totalRevenue}</p>
                </motion.div>
              </div>

              {/* Menu Items */}
              <div className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ x: 5 }}
                    className="w-full p-4 flex items-center justify-between bg-[#1a2234] rounded-xl hover:bg-cyan-500/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-cyan-400" />
                      <span>{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.count && (
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                          {item.count}
                        </span>
                      )}
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-cyan-500/20">
                <p className="text-sm text-gray-400 text-center">
                  Last login: {today}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default UserProfileDrawer;
