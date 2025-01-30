import { motion } from "framer-motion";

const ServiceTitle = () => {
    return (
        <div>
             <motion.div
      className="text-center mt-20 mb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1
        className="text-2xl font-extrabold md:text-5xl lg:text-4xl 
                   bg-gradient-to-r from-[#DD0429] to-red-600 text-transparent 
                   bg-clip-text drop-shadow-lg"
      >
      Comprehensive Digital Services
      </h1>
      <p className="mt-4  text-gray-600">
      At Social Verb, we provide comprehensive digital services, from social media marketing to web development<br/>, helping businesses establish their online presence and drive growth. Our expertise covers everything<br/> you need to succeed in the digital world
      </p>
    </motion.div>
        </div>
    );
};

export default ServiceTitle;