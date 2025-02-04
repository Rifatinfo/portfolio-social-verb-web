// import lo from '../../../public/logo.svg';
import { RiArrowDownSLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import Video from "../Video/Video";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTitle2 from "../PageTitle2/PageTitle2";
import PlayButton from "../Video/PlayButton";
const Portfolio = ({ loadData }) => {
  const [AllProduct, setAllProduct] = useState(loadData);
  const [productToShow, setProductToShow] = useState(4);
  const loadMoreProducts = () => {
    if (productToShow >= AllProduct.length) {
      return;
    } else {
      setProductToShow(previousProductToShow => previousProductToShow + 4);
    }
  }

  return (
    <div className=" md:max-w-7xl md:mx-auto ">
      <div>
      <PageTitle2></PageTitle2>
        <div className="grid grid-cols-1 gap-2 md:flex md:gap-4">
          <div className="w-full md:w-1/5 ">
            <div className="md:grid md:grid-cols-1 md:gap-[20px] grid grid-cols-2 gap-2">
              <button className="btn btn-outline text-[#dd0429] border-[#dd0429] border-2 relative overflow-hidden group">
                <span
                  className="absolute inset-0 bg-[#dd0429] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                  style={{ zIndex: 0 }}
                ></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                  Static Designs
                </span>
              </button>
              <button className="btn btn-outline text-[#dd0429] border-[#dd0429] border-2 relative overflow-hidden group">
                <span
                  className="absolute inset-0 bg-[#dd0429] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                  style={{ zIndex: 0 }}
                ></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                  Dynamic
                </span>
              </button>
             
              <button className="btn btn-outline text-[#dd0429] border-[#dd0429] border-2 relative overflow-hidden group">
                <span
                  className="absolute inset-0 bg-[#dd0429] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                  style={{ zIndex: 0 }}
                ></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                  3D Animations
                </span>
              </button>

              <details className="dropdown">
                <summary className="btn btn-outline text-[#dd0429] border-[#dd0429] border-2 relative overflow-hidden group flex items-center gap-1">
                  <span
                    className="absolute inset-0 bg-[#dd0429] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                    style={{ zIndex: 0 }}
                  ></span>
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                    Video Library
                  </span>
                  <RiArrowDownSLine className="relative z-10 text-xl group-hover:text-white transition-colors duration-300 ease-in-out" />
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box w-52 p-2 shadow-sm text-[#dd0429] ">
                  <li className="hover:bg-[#dd0429] hover:text-white hover:rounded-lg hover:font-medium"><a>CG Motion</a></li>
                  <li className="hover:bg-[#dd0429] hover:text-white hover:rounded-lg hover:font-medium"><a>OVC</a></li>
                  <li className="hover:bg-[#dd0429] hover:text-white hover:rounded-lg hover:font-medium"><a>TVC</a></li>
                  <li className="hover:bg-[#dd0429] hover:text-white hover:rounded-lg hover:font-medium"><a>Documentary</a></li>
                  <li className="hover:bg-[#dd0429] hover:text-white hover:rounded-lg hover:font-medium"><a>Video Explainer</a></li>
                  <li className="hover:bg-[#dd0429] hover:text-white hover:rounded-lg hover:font-medium"><a>Illustration Video</a></li>
                  <li className="hover:bg-[#dd0429] hover:text-white hover:rounded-lg hover:font-medium"><a>VFX Motion</a></li>
                </ul>
              </details>

            </div>
          </div>
          <div className="w-full md:w-4/5">
            <div className="grid  grid-cols-1 gap-3 md:grid-cols-4 md:grid-12">
              {
                AllProduct.slice(0, productToShow).map(singleItem => <div key={singleItem.id}>
                  <Link to={`/video/${singleItem.id}`}>
                  <div>
                            <div className="relative">
                            <figure className=" w-[307] h-[174px]">
                                <img 
                                className="rounded-2xl"
                                src="https://i.ytimg.com/vi/2vbqO9xsRao/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDLIh1QFFTVKJFrhQttZn4X0sPI7A"
                                alt="Shoes" />
                            </figure>
                            <div>
                                <p className="text-lg font-semibold">A card component has  </p>
                                <p className="mb-2"><span className="font-semibold">Brand :</span> component </p>
                            </div>
                            </div>

                            {/* play button */}
                            <PlayButton></PlayButton>
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
