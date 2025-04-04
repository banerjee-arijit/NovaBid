import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useUserStore from "@/store/userStore";
import { Search, Bell, User, Plus } from "lucide-react";
import AuctionCard from "../AuctionCard";
import CreateAuctionDrawer from "../CreateAuctionDrawer";

const UserDashBoard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { user, fetchSession } = useUserStore();
  const { name, email } = user?.user_metadata || {};

  useEffect(() => {
    fetchSession();
  }, [fetchSession]);

  const firstCharOfName = name?.charAt(0).toUpperCase() || "A";

  return (
    <div className=" min-h-screen text-white p-6 rounded-3xl shadow-lg">
      <header className="flex items-center gap-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="bg-cyan-500/20 p-3 rounded-full shadow-lg backdrop-blur-md"
        >
          <button className="h-10 w-10 flex justify-center items-center text-2xl font-bold text-cyan-400">
            {firstCharOfName}
          </button>
        </motion.div>
        <div>
          <h2 className="text-lg font-semibold">
            Welcome, <span className="text-cyan-400">{name}</span>
          </h2>
          <p className="text-sm text-gray-400">Friday, Apr 4, 2025</p>
        </div>
      </header>

      <main className="container mx-auto p-6 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="w-full md:w-auto order-2 md:order-1">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for auctions..."
                className="w-full md:w-[400px] pl-12 pr-4 py-3 bg-[#1c1d25] rounded-xl border border-gray-800 focus:outline-none focus:border-cyan-500 text-white transition-all shadow-lg backdrop-blur-md"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4 order-1 md:order-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDrawerOpen(true)}
              className="flex items-center px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md hover:shadow-cyan-500/50"
            >
              <Plus className="w-5 h-5 mr-2" /> Create Auction
            </motion.button>
          </div>
        </div>
      </main>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 p-4 bg-black/60 backdrop-blur-md border border-cyan-500/10 rounded-2xl shadow-lg text-white w-fit">
          <span className="text-lg font-semibold text-cyan-400">
            All Auctions
          </span>
        </div>
        <button className="text-sm text-cyan-400 hover:underline transition">
          Show More →
        </button>
      </div>
      <AuctionCard />
      <CreateAuctionDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
};

export default UserDashBoard;
