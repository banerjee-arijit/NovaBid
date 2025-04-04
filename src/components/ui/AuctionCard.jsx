import React from "react";
import { Timer, Eye } from "lucide-react";

const AuctionCard = () => {
  const auctionData = {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s",
    title: "Futuristic Art Piece",
    description: "A rare futuristic digital artwork with neon aesthetics.",
    creator: "Arijit Banerjee",
    currentBid: 5000,
    maxBid: 7500,
    timeLeft: "2h 30m",
    views: 1200,
  };

  return (
    <div className="w-[300px] mt-5 rounded-2xl bg-white/5 backdrop-blur-lg cursor-pointer p-4 hover:shadow-[0_0_40px_rgba(67,255,255,0.15)] transition-all duration-300">
      <div className="relative h-[200px] rounded-xl overflow-hidden mb-4">
        <img
          alt={auctionData.title}
          className="w-full h-full object-cover"
          src={auctionData.image}
        />
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <Timer className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-medium text-white">
            {auctionData.timeLeft}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md px-3 py-2 rounded-lg flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-semibold">
            {auctionData.creator.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-medium">
              {auctionData.creator}
            </p>
            <p className="text-gray-300 text-xs">Creator</p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <h3 className="text-white text-lg font-semibold mb-1">
            {auctionData.title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2">
            {auctionData.description}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 py-3 border-y border-white/10">
          <div className="text-center">
            <p className="text-cyan-400 font-semibold">
              ₹{auctionData.currentBid}
            </p>
            <p className="text-xs text-gray-400">Current Bid</p>
          </div>
          <div className="text-center border-x border-white/10">
            <div className="flex items-center justify-center gap-1">
              <Eye className="w-4 h-4 text-gray-400" />
              <p className="text-white font-semibold">{auctionData.views}</p>
            </div>
            <p className="text-xs text-gray-400">Views</p>
          </div>
          <div className="text-center">
            <p className="text-green-400 font-semibold">
              ₹{auctionData.maxBid}
            </p>
            <p className="text-xs text-gray-400">Max Bid</p>
          </div>
        </div>
        <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
          Place Bid
        </button>
      </div>
    </div>
  );
};

export default AuctionCard;
