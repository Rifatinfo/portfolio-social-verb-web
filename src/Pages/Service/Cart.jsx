import { motion } from "framer-motion";

const Cart = () => {
  return (
    <div>
      <div className="md:max-w-7xl md:mx-auto grid grid-cols-1 lg:grid-cols-6 md:gap-4 gap-2 p-2 md:p-0 mt-16">
        {/* Service Cards */}
        {[
          {
            title: "Software management ",
            imgSrc:"https://cdn-icons-png.flaticon.com/512/7075/7075369.png",
          },
          {
            title: "Branding & Promotion",
            imgSrc:
              "https://cdn-icons-png.flaticon.com/512/10694/10694239.png",
          },
          {
            title: "Event & Activation",
            imgSrc:
              "https://cdn-icons-png.flaticon.com/512/7046/7046489.png",
          },
          {
            title: "Web & App",
            imgSrc:
              "https://cdn-icons-png.flaticon.com/512/7075/7075373.png",
          },
          {
            title: "Digital Marketing",
            imgSrc:
              "https://cdn-icons-png.flaticon.com/512/2065/2065064.png",
          },
          {
            title: "Content Development",
            imgSrc:
              "https://cdn-icons-png.flaticon.com/512/3852/3852711.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white border h-90 border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#C73450] hover:text-white group"
          >
            <div className="p-6  mt-10">
              <div className="mb-6 flex items-center justify-center">
                    <img className="w-[70px] h-[70px]" src={service.imgSrc} alt="" />
              </div>
              <div>
              <h2 className="h-[100px] md:mt-0 mt-10 text-center md:text-start md:text-[16px] text-lg font-semibold text-gray-800 mb-4 group-hover:text-white">
                  {service.title}
              </h2>
              <div className="md:mt-10 mt-4">
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
    </div>
  );
};

export default Cart;
