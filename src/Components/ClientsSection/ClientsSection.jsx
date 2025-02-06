import { motion } from "framer-motion";

export default function ClientsSection() {
  return (
    <section className="py-[70px]">
      <div className="md:max-w-7xl md:mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="border-l-[5px] border-[#C73450] pl-5"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl font-extrabold md:text-5xl lg:text-4xl 
                   bg-gradient-to-r from-[#C73450] to-red-600 text-transparent 
                   bg-clip-text drop-shadow-lg"
          >
            Our Clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-sm font-medium text-body-color dark:text-dark-6 mt-2"
          >
            Trusted by leading brands worldwide
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}


