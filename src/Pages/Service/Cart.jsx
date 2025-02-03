import { motion } from "framer-motion";
import { GrUserExpert } from "react-icons/gr";

const Cart = () => {
  return (
    <div>
      <div className="md:max-w-7xl md:mx-auto grid grid-cols-1 lg:grid-cols-4 md:gap-4 gap-2 border">
        {/* Service Cards */}
        {[
          {
            title: "Creative Concept & Execution",
            imgSrc:
              "https://axilthemes.com/themes/cynic/illustrated-small-digital-agency/wp-content/uploads/2018/10/service-icon-1-1.png",
          },
          {
            title: "Your Brand with Advertising Solutions",
            imgSrc:
              "https://axilthemes.com/themes/cynic/illustrated-small-digital-agency/wp-content/uploads/2018/10/service-icon-2-1.png",
          },
          {
            title: "Video Production & Photography",
            imgSrc:
              "https://axilthemes.com/themes/cynic/illustrated-small-digital-agency/wp-content/uploads/2018/10/service-icon-3-1.png",
          },
          {
            title: "Design and Printing Solutions",
            imgSrc:
              "https://axilthemes.com/themes/cynic/illustrated-small-digital-agency/wp-content/uploads/2018/10/service-icon-4.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white border h-90 border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#C73450] hover:text-white group"
          >
            <div className="p-6  mt-10">
              <div className="mb-6 flex items-center justify-center">
                <GrUserExpert className="text-6xl" />
              </div>
              <div>
              <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-4 group-hover:text-white">
                {service.title}
              </h2>
              <div className="md:mt-24 mt-18">
                <a
                  href="#more"
                  className="text-[#DD0429] group-hover:text-white font-semibold underline"
                >
                  See More
                </a>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center mt-8 mb-4">
        <motion.button
          className="relative group px-6 py-3 text-white font-semibold text-lg rounded-full bg-[#DD0429] shadow-lg transition-all hover:shadow-2xl hover:scale-105"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Show More</span>

          {/* Glowing Effect */}
          <motion.div
            className="absolute inset-0 bg-[#DD0429] opacity-30 rounded-full blur-xl transition-opacity group-hover:opacity-50"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </motion.button>
      </div>
    </div>
  );
};

export default Cart;
