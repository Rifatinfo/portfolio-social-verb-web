import { motion } from "framer-motion";
import { Play } from "lucide-react";
const PlayButton = () => {
    return (
        <div>
             <div className="z-10 absolute top-38 md:left-36 left-28">
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center w-20 h-20 bg-red-600 rounded-full shadow-lg focus:outline-none"
      >
        {/* Glowing Effect */}
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute inset-0 bg-red-600 rounded-full blur-lg"
        ></motion.div>

        {/* Icon */}
        <Play className="z-10 text-white w-8 h-8" />
      </motion.button>
             </div>
        </div>
    );
};

export default PlayButton