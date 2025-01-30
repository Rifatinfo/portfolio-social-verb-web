import { motion } from "framer-motion";

const TeamTitle = () => {
    return (
        <div>
            <motion.div
      className="mt-28 mb-10 text-start"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1
        className="text-2xl font-extrabold md:text-5xl lg:text-4xl 
                   bg-gradient-to-r from-[#DD0429] to-red-600 text-transparent 
                   bg-clip-text drop-shadow-lg"
      >
        Meet Our Creative Team
      </h1>

      <p className="mt-4 text-gray-600 md:text-xl lg:text-xl">
      Our team consists of passionate individuals who drive innovation and create amazing products. They work tirelessly to bring our vision to life. Meet them and learn more about their incredible skills and experience.
      </p>
    </motion.div>
        </div>
    );
};

export default TeamTitle;