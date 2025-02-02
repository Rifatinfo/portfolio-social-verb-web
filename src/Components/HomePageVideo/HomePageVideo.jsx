import { motion } from "framer-motion";
import { Play } from "lucide-react";
import ReactPlayer from "react-player";


const HomePageVideo = () => {
 
  return (
    <div className="flex-cols gap-4 md:flex md:gap-10 max-w-7xl mx-auto mt-[75px]">
      {/* text */}
      <div className="md:w-2/5">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">Transform Your
            <span className="text-[#C73450]"> Ideas </span> into Reality
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">Seamlessly design and build dynamic solutions with precision and creativity.
            <br className="hidden md:inline lg:hidden" />From static concepts to dynamic innovations, we bring your vision to life with expertise and excellence
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-[#C73450] text-gray-50 btn-outline border-2 border-[#C73450]">Explore Projects</a>
            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border-2 rounded dark:border-gray-800">Get Started</a>
          </div>
        </div>
      </div>

      {/* video */}
      <div className="md:w-3/5 p-2 relative rounded-xl overflow-hidden"> {/* Aspect ratio container */}
        <ReactPlayer
          url="https://www.youtube.com/embed/1V-BxNgrCJM?si=QMFAkpgQEXO6ZsF-"
          light={<img src="https://img.youtube.com/vi/1V-BxNgrCJM/maxresdefault.jpg" alt="Thumbnail"  className="rounded-xl" />}
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
      {/* play button */}
      <div className="absolute md:ml-220 md:mt-50 -mt-30 ml-34 ">
      <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(255, 0, 0, 0.7)" }} // Glowing shadow on hover
          whileTap={{ scale: 0.95 }} // Press effect
          className="relative flex items-center justify-center w-15 h-15 bg-[#C73450] rounded-full shadow-xl focus:outline-none transition-all"
        >
          {/* Soft Glowing Effect */}
          <motion.div
            animate={{
              opacity: [0.3, 0.7, 0.3], // Smooth fade effect
              scale: [1, 1.15, 1], // Gentle pulsing effect
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 bg-[#C73450] rounded-full blur-md"
          />

          {/* Play Icon */}
          <Play className="relative z-10 text-white w-8 h-8" />
        </motion.button>
      </div>
    </div>
  );
};

export default HomePageVideo;
