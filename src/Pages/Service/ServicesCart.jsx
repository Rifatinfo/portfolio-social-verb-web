import ServiceTitle from "./ServiceTitle";
import { motion } from "framer-motion";


const ServicesCart = () => {
  return (
    <div>
        {/* title */}
        <ServiceTitle></ServiceTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
      {/* Service Card 1 */}
      <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Creative Concept & Execution</h2>
          <p className="text-gray-600 text-sm mb-4">
            Crafting unique and effective concepts to drive your brand's success.
          </p>
          <a href="#more" className="text-[#DD0429] hover:text-[#B8021E] font-semibold underline">
            See More
          </a>
        </div>
      </div>

      {/* Service Card 2 */}
      <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Brand with Advertising Solutions</h2>
          <p className="text-gray-600 text-sm mb-4">
            Leverage the power of social media to grow your brand and engage with audiences.
          </p>
          <a href="#more" className="text-[#DD0429] hover:text-[#B8021E] font-semibold underline">
            See More
          </a>
        </div>
      </div>

      {/* Service Card 3 */}
      <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Video Production & Photography</h2>
          <p className="text-gray-600 text-sm mb-4">
            Improve your website's ranking with our targeted SEO strategies.
          </p>
          <a href="#more" className="text-[#DD0429] hover:text-[#B8021E] font-semibold underline">
            See More
          </a>
        </div>
      </div>

      {/* Service Card 4 */}
      <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Design and Printing Solutions</h2>
          <p className="text-gray-600 text-sm mb-4">
            Create beautiful, responsive websites that drive customer engagement.
          </p>
          <a href="#more" className="text-[#DD0429] hover:text-[#B8021E] font-semibold underline">
            See More
          </a>
        </div>
      </div>
        </div>

        {/* see more details button */}
        <div className="text-center mt-4 mb-4">
              <motion.button
                className="relative group px-6 py-3 text-white font-semibold text-lg rounded-full 
                 bg-[#DD0429] shadow-lg transition-all 
                 hover:shadow-2xl hover:scale-105"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Show More</span>

                {/* Glowing Effect */}
                <motion.div
                  className="absolute inset-0 bg-[#DD0429] opacity-30 
                   rounded-full blur-xl transition-opacity group-hover:opacity-50"
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                />
              </motion.button>
            </div>
    </div>
  );
};

export default ServicesCart;
