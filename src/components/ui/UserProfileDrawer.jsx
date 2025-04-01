"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { X, UserCircle } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./shadcn/drawer";

const UserProfileDrawer = ({ open, setOpen }) => {
  const [goal, setGoal] = React.useState(500);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="w-screen h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-3xl p-6 bg-gray-900 rounded-2xl shadow-2xl border border-cyan-500/50"
        >
          <DrawerHeader className="flex justify-between items-center border-b border-cyan-400/30 pb-3">
            <div>
              <DrawerTitle className="text-2xl font-bold text-cyan-400">
                User Profile
              </DrawerTitle>
              <DrawerDescription className="text-gray-400">
                Customize your experience
              </DrawerDescription>
            </div>
            <DrawerClose asChild>
              <button className="p-2 text-gray-400 hover:text-cyan-400 transition-all">
                <X size={28} />
              </button>
            </DrawerClose>
          </DrawerHeader>
          <div className="flex flex-col items-center mt-6">
            <motion.div
              className="rounded-full p-2 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <UserCircle className="w-24 h-24 text-white" />
            </motion.div>
            <h3 className="mt-4 text-xl font-semibold text-white">Arijit</h3>
            <p className="text-sm text-gray-400">arijit@gmail.com</p>
          </div>
          <div className="flex flex-col items-center mt-6">
            <h4 className="text-lg font-medium text-gray-300">Move Goal</h4>
            <div className="flex items-center space-x-4 mt-3">
              <button
                onClick={() => setGoal(goal - 50)}
                className="px-3 py-2 text-xl font-bold bg-gray-800 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all"
              >
                -
              </button>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-5xl font-bold text-cyan-400"
              >
                {goal}
              </motion.div>
              <button
                onClick={() => setGoal(goal + 50)}
                className="px-3 py-2 text-xl font-bold bg-gray-800 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all"
              >
                +
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-2">Calories/day</p>
          </div>
          <DrawerFooter className="mt-6 flex justify-center space-x-4">
            <button className="px-5 py-2 bg-cyan-500 text-gray-900 font-bold rounded-xl hover:bg-cyan-300 transition-all shadow-md">
              Save Changes
            </button>
            <DrawerClose asChild>
              <button className="px-5 py-2 bg-gray-700 text-gray-400 rounded-xl hover:bg-gray-600 hover:text-white transition-all shadow-md">
                Close
              </button>
            </DrawerClose>
          </DrawerFooter>
        </motion.div>
      </DrawerContent>
    </Drawer>
  );
};

export default UserProfileDrawer;
