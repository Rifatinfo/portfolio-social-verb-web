// import lo from '../../../public/logo.svg';

import { FiSend } from "react-icons/fi";
import Video from "../Video/Video";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Portfolio = ({ loadData }) => {
  const [AllProduct, setAllProduct] = useState(loadData);
  const [productToShow, setProductToShow] = useState(6);
  const loadMoreProducts = () => {
    if (productToShow >= AllProduct.length) {
      return;
    } else {
      setProductToShow(previousProductToShow => previousProductToShow + 6);
    }
  }

  return (
    <div className=" max-w-[1536px] mx-auto ">
      <div>
        <div className="grid grid-cols-1 gap-2 md:flex md:gap-4">
          <div className="w-full p-4 md:w-1/5  shadow-lg rounded-lg">
            <div className="md:grid md:grid-cols-1 md:gap-4 md:ml-8 grid grid-cols-2 gap-2">
              <button className="btn btn-outline text-[#dd0429] border-2 relative overflow-hidden group">
                <span
                  className="absolute inset-0 bg-[#dd0429] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                  style={{ zIndex: 0 }}
                ></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                  Static Designs
                </span>
              </button>
              <button className="btn btn-outline text-[#dd0429] border-2 relative overflow-hidden group">
                <span
                  className="absolute inset-0 bg-[#dd0429] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                  style={{ zIndex: 0 }}
                ></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                  Dynamic
                </span>
              </button>
              <button className="btn btn-outline text-[#dd0429] border-2 relative overflow-hidden group">
                <span
                  className="absolute inset-0 bg-[#dd0429] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                  style={{ zIndex: 0 }}
                ></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                  3D Animations
                </span>
              </button>
              <button className="btn btn-outline text-[#dd0429] border-2 relative overflow-hidden group">
                <span
                  className="absolute inset-0 bg-[#dd0429] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                  style={{ zIndex: 0 }}
                ></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                  Video Library
                </span>
              </button>
              <button className="btn btn-outline text-[#dd0429] border-2 relative overflow-hidden group">
                <span
                  className="absolute inset-0 bg-[#dd0429] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                  style={{ zIndex: 0 }}
                ></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                  CG Motion
                </span>
              </button>
              <button className="btn btn-outline text-[#dd0429] border-2 relative overflow-hidden group">
                <span
                  className="absolute inset-0 bg-[#dd0429] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                  style={{ zIndex: 0 }}
                ></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                  OVC
                </span>
              </button>
              <button className="btn btn-outline text-[#dd0429] border-2 relative overflow-hidden group">
                <span
                  className="absolute inset-0 bg-[#dd0429] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                  style={{ zIndex: 0 }}
                ></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                  TVC
                </span>
              </button>
              <button className="btn btn-outline text-[#dd0429] border-2 relative overflow-hidden group">
                <span
                  className="absolute inset-0 bg-[#dd0429] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                  style={{ zIndex: 0 }}
                ></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                   Documentary
                </span>
              </button>
              <button className="btn btn-outline text-[#dd0429] border-2 relative overflow-hidden group">
                <span
                  className="absolute inset-0 bg-[#dd0429] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                  style={{ zIndex: 0 }}
                ></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                   Event Video
                </span>
              </button>
              <button className="btn btn-outline text-[#dd0429] border-2 relative overflow-hidden group">
                <span
                  className="absolute inset-0 bg-[#dd0429] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                  style={{ zIndex: 0 }}
                ></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                   Video Explainer
                </span>
              </button>
              <button className="btn btn-outline text-[#dd0429] border-2 relative overflow-hidden group">
                <span
                  className="absolute inset-0 bg-[#dd0429] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                  style={{ zIndex: 0 }}
                ></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                   Illustration Video
                </span>
              </button>
              <button className="btn btn-outline text-[#dd0429] border-2 relative overflow-hidden group">
                <span
                  className="absolute inset-0 bg-[#dd0429] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                  style={{ zIndex: 0 }}
                ></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                  VFX Motion
                </span>
              </button>
            </div>
          </div>
          <div className="w-full md:w-4/5 shadow-lg rounded-2xl">
            <div className="grid p-4 grid-cols-1 gap-3 md:grid-cols-3 md:grid-4">
              {
                AllProduct.slice(0, productToShow).map(singleItem => <div key={singleItem.id}>
                  <Link to={`/video/${singleItem.id}`}>
                  <div className="card h-full flex flex-col bg-base-100 shadow-lg">
                    <div className="">
                      <Video singleItem={singleItem}></Video>
                    </div>
                    <div className="card-body ">
                      <h2 className="font-semibold text-lg ">{singleItem.title}</h2>
                      <p className="font-semibold  text-black"><span>Brand :</span> {singleItem.brand_name}</p>
                      <div className="flex justify-center gap-4 h-full mt-2">
                        <div>
                          <button
                            className={`
                             px-4 py-2 rounded-full 
                             flex items-center gap-2 
                             text-slate-500
                             shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
                             
                             transition-all
                     
                             hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
                             hover:text-violet-500
                         `}
                          >
                            <FiSend />
                            <span>Add To Cart</span>
                          </button>
                        </div>
                        <div>
                          <button
                            className={`
                             px-4 py-2 rounded-full 
                             flex items-center gap-2 
                             text-slate-500
                             shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
                             
                             transition-all
                     
                             hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
                             hover:text-violet-500
                         `}
                          >
                            <FiSend />
                            <span>Details</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>)
              }
            </div>

            {/* show more button */}
            {
          productToShow < AllProduct.length && <div>
            {/* showMore button  */}
            <div className="text-center mt-4 mb-4">
              <motion.button
                className="relative group px-6 py-3 text-white font-semibold text-lg rounded-full 
                 bg-[#DD0429] shadow-lg transition-all 
                 hover:shadow-2xl hover:scale-105"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => loadMoreProducts()}
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
        }
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Portfolio;
