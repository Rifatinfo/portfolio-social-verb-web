import { useEffect, useState } from "react";
import CartTitle from "./CartTitle";

const ServiceCart = () => {
  const [serviceCartData, setServiceCartData] = useState([]);
  console.log(serviceCartData.length);
  
  useEffect(() =>{
      fetch('./serviceData.json')
      .then(res => res.json())
      .then(data => setServiceCartData(data))
  }, []);
  return (
    <div>
      <div>
        <CartTitle/>
      </div>
      
      <div className="md:max-w-7xl md:mx-auto grid grid-cols-1 lg:grid-cols-6 md:gap-4 gap-2 p-2 md:p-0  md:px-0 px-2">
        {/* Service Cards */}
       {serviceCartData.map((service, index) => (
          <div
            key={index}
            className="bg-white border h-90 border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#C73450] hover:text-white group"
          >
            <div className="p-6  mt-10">
              <div className="mb-6 flex items-center justify-center">
                    <img className="w-[70px] h-[70px]" src={service.imgSrc} alt="" />
              </div>
              <div>
              <div className="h-[80px] -space-y-2 text-lg  mt-15 text-start md:text-[16px] font-semibold text-gray-800  group-hover:text-white">
                 <p> {service.title}</p>
                 <p> {service.title2}</p>
              </div>
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

export default ServiceCart;
