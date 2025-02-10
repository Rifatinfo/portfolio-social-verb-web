import { RiArrowDownSLine } from "react-icons/ri";
import { motion } from "framer-motion";


const ServicePricing = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto mb-16 text-start">
                {/* <span className="font-bold tracking-wider uppercase text-[#C73450]"></span>
                <h2 className="text-2xl font-bold lg:text-5xl text-[#C73450]"></h2> */}
                 <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="border-l-[5px] border-[#C73450] pl-5"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl font-extrabold md:text-5xl lg:text-4xl 
                   bg-gradient-to-r from-[#C73450] to-red-600 text-transparent 
                   bg-clip-text"
          >
          Choose Your Best Plan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-sm font-medium text-body-color dark:text-dark-6 mt-2"
          >
            Pricing
          </motion.p>
        </motion.div>
            </div>
            <div className="grid grid-cols-1 gap-2 md:flex md:gap-4 md:px-0 px-1 mt-20">
                <div className="w-full md:w-1/6 ">
                    <div className="md:grid md:grid-cols-1 md:gap-2 grid grid-cols-2 gap-2">
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
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:grid-12 md:px-0 px-6">

                        <div className="flex w-full mb-8 sm:px-4  lg:mb-0">
                            <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-50">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold">Beginner</h4>
                                    <span className="text-6xl font-bold text-[#C73450]">Free</span>
                                </div>
                                <p className="mt-3 leading-relaxed dark:text-gray-600">Etiam ac convallis enim, eget euismod dolor.</p>
                                <ul className="flex-1 mb-6 dark:text-gray-600">
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Aenean quis</span>
                                    </li>
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Morbi semper</span>
                                    </li>
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Tristique enim nec</span>
                                    </li>
                                </ul>
                                <button type="button" className="border-[#C73450] border-2  inline-block px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-600 dark:text-gray-50">Get Started</button>
                            </div>
                        </div>
                        <div className="flex w-full mb-8 sm:px-4  lg:mb-0">
                            <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-violet-600 dark:text-gray-50">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold">Pro</h4>
                                    <span className="text-6xl font-bold text-[#C73450]">$24
                                        <span className="text-sm tracking-wide">/month</span>
                                    </span>
                                </div>
                                <p className="leading-relaxed">Morbi cursus ut sapien sit amet consectetur.</p>
                                <ul className="flex-1 space-y-2">
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Everything in Free</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Phasellus tellus</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Praesent faucibus</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Aenean et lectus blandit</span>
                                    </li>
                                </ul>
                                <a rel="noopener noreferrer" href="#" className="border bg-[#C73450] text-white inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded dark:bg-gray-100 ">Get Started</a>
                            </div>
                        </div>
                        <div className="flex w-full mb-8 sm:px-4 lg:mb-0">
                            <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-50">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold">Team</h4>
                                    <span className="text-6xl font-bold text-[#C73450]">$72
                                        <span className="text-sm tracking-wide">/month</span>
                                    </span>
                                </div>
                                <p className="leading-relaxed dark:text-gray-600">Phasellus ultrices bibendum nibh in vehicula.</p>
                                <ul className="space-y-2 dark:text-gray-600">
                                    <li className="flex items-start space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 ">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Everything in Pro</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 ">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Fusce sem ligula</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Curabitur dictum</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 ">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Duis odio eros</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 ">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Vivamus ut lectus ex</span>
                                    </li>
                                </ul>
                                <a rel="noopener noreferrer" href="#" className="border-[#C73450] border-2 inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded  dark:text-gray-50">Get Started</a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServicePricing;


//  <div className=" md:w-3/4 w-full ">
//     <section className="py-20 dark:bg-gray-100 dark:text-gray-800">
//         <div>

//             <div className="max-w-2xl mx-auto mb-16 text-center">
//                 <span className="font-bold tracking-wider uppercase text-[#C73450]">Pricing</span>
//                 <h2 className="text-2xl font-bold lg:text-5xl text-[#C73450]">Choose your best plan</h2>
//             </div>

//             <div className="text-center mb-10">
//                 <button className="px-4 py-1 font-semibold border-2 rounded-l-lg bg-[#C73450] text-white border-[#C73450]">
//                     Monthly
//                 </button>
//                 <button className="px-4 py-1  rounded-r-lg  text-black border-2 border-[#C73450]">
//                     Annually
//                 </button>
//             </div>



//             <div className="flex flex-wrap items-stretch -mx-4">

//             </div>
//         </div>
//     </section>


// </div> 