import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const CreateAuctionDrawer = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 h-full w-full md:w-[500px] bg-[#0a0d14] border-l border-cyan-500/30 shadow-[0_0_15px_rgba(0,184,219,0.25)] z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-white">
                  Create Auction
                </h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 hover:bg-cyan-500/20 rounded-full"
                >
                  <X className="w-6 h-6 text-cyan-400" />
                </motion.button>
              </div>

              {/* Form */}
              <form className="space-y-6">
                {/* Auction Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black border border-cyan-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
                    placeholder="Enter auction title"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-black border border-cyan-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white resize-none"
                    placeholder="Describe your auction item"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Starting Price (INR)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    className="w-full px-4 py-3 bg-black border border-cyan-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
                    placeholder="0.00"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Duration
                  </label>
                  <select className="w-full px-4 py-3 bg-black border border-cyan-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white">
                    <option value="24">24 hours</option>
                    <option value="48">48 hours</option>
                    <option value="72">72 hours</option>
                    <option value="168">7 days</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Upload Image
                  </label>
                  <div className="border-2 border-dashed border-cyan-500/30 rounded-xl p-8 text-center hover:border-cyan-400 transition-all">
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="cursor-pointer text-gray-400 hover:text-cyan-400 transition-all"
                    >
                      <p>Drop your image here or click to browse</p>
                      <p className="text-sm mt-2">Maximum file size: 5MB</p>
                    </label>
                  </div>
                </div>

                {/* Create Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Create Auction
                </motion.button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CreateAuctionDrawer;
