import { Link } from "react-router-dom";
import { AlertCircle, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function ErrorPage() {
  return (
    <div className="h-screen bg-black text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center items-center h-screen"
      >
        <AlertCircle size={80} className="text-[#00b8db] animate-pulse" />
        <h1 className="text-2xl md:text-5xl font-bold mt-4">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-center text-gray-400 mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center px-6 py-3 bg-[#00b8db] text-black font-semibold rounded-xl shadow-lg hover:bg-[#009bb5] transition-all"
        >
          <Home className="mr-2" /> Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}
