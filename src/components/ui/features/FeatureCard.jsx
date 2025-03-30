import { motion } from "framer-motion";

const FeatureCard = ({ icon: Icon, title, description, delay, gradient }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`relative p-8 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-xl ${gradient}`}
    >
      <motion.div
        className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
        whileHover={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-8 h-8 text-cyan-400" />
      </motion.div>

      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl" />
    </motion.div>
  );
};

export default FeatureCard;
