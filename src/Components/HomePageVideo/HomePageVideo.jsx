// import { motion } from "framer-motion";
// import { Play } from "lucide-react";
import ReactPlayer from "react-player";


const HomePageVideo = () => {
 
  return (
    <div className="flex-cols gap-4 md:flex md:gap-10 max-w-7xl mx-auto mt-[95px]">
      {/* text */}
      <div className="md:w-2/5">
        <div className=" flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">Transform Your
            <span className="text-[#C73450]"> Ideas </span> into Reality
          </h1>
          <p className="p-1 md:p-0 mt-6 md:mb-8 text-lg ">Seamlessly design and build dynamic solutions with precision and creativity.
            <br className="hidden md:inline lg:hidden" />From static concepts to dynamic innovations, we bring your vision to life with expertise and excellence
          </p>
          <div className="p-2 md:p-0 flex flex-col space-y-2 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a rel="noopener noreferrer" href="#" className="md:px-6 py-2 text-lg font-semibold rounded bg-[#C73450] text-gray-50 btn-outline border-2 border-[#C73450]">Explore Projects</a>
            <a rel="noopener noreferrer" href="#" className="md:px-6 py-2 text-lg font-semibold border-2 rounded dark:border-gray-800">Get Started</a>
          </div>
        </div>
      </div>

      {/* video */}
      <div className="h-[250px] md:h-[419px] md:w-3/5  relative rounded-xl overflow-hidden md:mt-0 mt-6 "> {/* Aspect ratio container */}
        <ReactPlayer
          url="https://www.youtube.com/embed/1V-BxNgrCJM?si=QMFAkpgQEXO6ZsF-"
          light={<img src="https://img.youtube.com/vi/1V-BxNgrCJM/maxresdefault.jpg" alt="Thumbnail"  className="rounded-xl" />}
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
      {/* play button */}
      
    </div>
  );
};

export default HomePageVideo;
