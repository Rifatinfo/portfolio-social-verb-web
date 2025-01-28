// import lo from '../../../public/logo.svg';

import { FiSend } from "react-icons/fi";
import Video from "../Video/Video";

const Portfolio = () => {
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
                  CG
                </span>
              </button>
            </div>
          </div>
          <div className="w-full md:w-4/5 shadow-lg rounded-2xl">
            <div className="grid p-4 grid-cols-1 gap-3 md:grid-cols-3 md:grid-4">
              <div className="card bg-base-100 shadow-sm">
                <div>
                    <Video></Video>
                </div>
                <div className="card-body">
                  <h2 className="font-semibold text-xl text-center mb-2">3D Animation</h2>
                  <div className="flex justify-center gap-4">
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
              {/* <div className="card bg-base-100  shadow-sm">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Card Title</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100  shadow-sm">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Card Title</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
