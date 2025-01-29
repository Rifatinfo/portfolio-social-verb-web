import { motion } from "framer-motion";

export default function ClientsSection() {
  return (
    <motion.div
      className="mt-28 mb-10 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1
        className="text-2xl font-extrabold md:text-5xl lg:text-4xl 
                   bg-gradient-to-r from-[#DD0429] to-red-600 text-transparent 
                   bg-clip-text drop-shadow-lg"
      >
        Our Clients
      </h1>

      <p className="mt-4 text-lg text-gray-600 md:text-xl lg:text-2xl">
        Trusted by leading brands worldwide
      </p>
    </motion.div>
  );
}
