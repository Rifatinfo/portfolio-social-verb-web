
import { useState } from "react";
import { Link } from "react-router-dom";
import PageTitle2 from "../PageTitle2/PageTitle2";
import PlayButton from "../Video/PlayButton";
import { RiArrowDownSLine } from "react-icons/ri";
import Pagination from "./Pagination";


const Portfolio = ({ loadData }) => {
  const [AllProduct, setAllProduct] = useState(loadData);
  const [productToShow, setProductToShow] = useState(8);
  const loadMoreProducts = () => {
    if (productToShow >= AllProduct.length) {
      return;
    } else {
      setProductToShow(previousProductToShow => previousProductToShow + 8);
    }
  }
  console.log(setAllProduct, loadMoreProducts);
  return (
    <div className="md:max-w-7xl md:mx-auto">
      <div>
      <PageTitle2></PageTitle2>
        <div className="grid grid-cols-1 gap-2 md:flex md:gap-4 md:px-0 px-1">
          <div className="w-full md:w-1/6 ">
            <div className="md:grid md:grid-cols-1 md:gap-2 grid grid-cols-2 gap-2">
              
              {/* <button className="btn btn-outline text-[#C73450] border-[#C73450] border-2 relative overflow-hidden group">
                <span
                  className="absolute inset-0 bg-[#C73450] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                  style={{ zIndex: 0 }}
                ></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                  3D Animations
                </span>
              </button> */}
              
              {/* dropdown */}
              <details className="dropdown">
              <summary className="btn btn-outline text-[#C73450] border-[#C73450] border-2 relative overflow-hidden w-full group">
              <span
                  className="absolute inset-0 bg-[#C73450] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                  style={{ zIndex: 0 }}
                ></span>
                <p className="text-[11px] md:text-[14px] relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                Content Development
                </p>
                <RiArrowDownSLine className="relative z-10 text-xl transition-colors duration-300 ease-in-out group-hover:text-white" />
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box w-full p-2 shadow-md text-[#C73450]">
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Social media content</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Digital media content</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Content writing</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Photography</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Design</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Audio-visual & CG</a></li>
              </ul>
              </details>
              <details className="dropdown">
              <summary className="btn btn-outline text-[#C73450] border-[#C73450] border-2 relative overflow-hidden w-full group">
              <span
                  className="absolute inset-0 bg-[#C73450] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                  style={{ zIndex: 0 }}
                ></span>
                <span className="text-[11px] md:text-[14px] relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                Digital Marketing
                </span>
                <RiArrowDownSLine className="relative z-10 text-xl transition-colors duration-300 ease-in-out group-hover:text-white" />
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box w-full p-2 shadow-md text-[#C73450]">
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Social media content</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Digital media content</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Content writing</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Photography</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Design</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Audio-visual & CG</a></li>
              </ul>
              </details>
              <details className="dropdown">
              <summary className="btn btn-outline text-[#C73450] border-[#C73450] border-2 relative overflow-hidden w-full group">
              <span
                  className="absolute inset-0 bg-[#C73450] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                  style={{ zIndex: 0 }}
                ></span>
                <span className="text-[11px] md:text-[14px] relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                Branding & Promotion
                </span>
                <RiArrowDownSLine className="relative z-10 text-xl transition-colors duration-300 ease-in-out group-hover:text-white" />
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box w-full p-2 shadow-md text-[#C73450]">
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Social media content</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Digital media content</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Content writing</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Photography</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Design</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Audio-visual & CG</a></li>
              </ul>
              </details>
              <details className="dropdown">
              <summary className="btn btn-outline text-[#C73450] border-[#C73450] border-2 relative overflow-hidden w-full group">
              <span
                  className="absolute inset-0 bg-[#C73450] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                  style={{ zIndex: 0 }}
                ></span>
                <span className="text-[11px] md:text-[14px] relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                Web & App
                </span>
                <RiArrowDownSLine className="relative z-10 text-xl transition-colors duration-300 ease-in-out group-hover:text-white" />
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box w-full p-2 shadow-md text-[#C73450]">
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Social media content</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Digital media content</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Content writing</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Photography</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Design</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Audio-visual & CG</a></li>
              </ul>
              </details>
              <details className="dropdown">
              <summary className="btn btn-outline text-[#C73450] border-[#C73450] border-2 relative overflow-hidden w-full group">
              <span
                  className="absolute inset-0 bg-[#C73450] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                  style={{ zIndex: 0 }}
                ></span>
                <span className="text-[11px] md:text-[14px] relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                Event & Activation
                </span>
                <RiArrowDownSLine className="relative z-10 text-xl transition-colors duration-300 ease-in-out group-hover:text-white" />
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box w-full p-2 shadow-md text-[#C73450]">
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Social media content</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Digital media content</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Content writing</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Photography</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Design</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Audio-visual & CG</a></li>
              </ul>
              </details>
              <details className="dropdown">
              <summary className="btn btn-outline text-[#C73450] border-[#C73450] border-2 relative overflow-hidden w-full group">
              <span
                  className="absolute inset-0 bg-[#C73450] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                  style={{ zIndex: 0 }}
                ></span>
                <span className="text-[11px] md:text-[14px] relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                Software management
                </span>
                <RiArrowDownSLine className="relative z-10 text-xl transition-colors duration-300 ease-in-out group-hover:text-white" />
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box w-full p-2 shadow-md text-[#C73450]">
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Social media content</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Digital media content</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Content writing</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Photography</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Design</a></li>
                <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Audio-visual & CG</a></li>
              </ul>
              </details>
            </div>
          </div>
          <div className="w-full md:w-5/6">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-4 md:grid-12 md:px-0 px-6">
              {
                AllProduct.slice(0, productToShow).map(singleItem => <div key={singleItem.id}>
                  <Link to={`/video/${singleItem.id}`}>
                  <div>
                            <div className="relative md:-space-y-5.5 space-y-2">
                            <figure className="h-[174px]">
                                <img 
                                className="rounded-2xl"
                                src="https://i.ytimg.com/vi/2vbqO9xsRao/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDLIh1QFFTVKJFrhQttZn4X0sPI7A"
                                alt="Shoes" />
                            </figure>
                            <div className="">
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
           
          </div>
        </div>
        {
          productToShow < AllProduct.length && <div>
            {/* showMore button  */}
            <Pagination></Pagination>
          </div>
        }
      </div>
    </div>
  );
};

export default Portfolio;
