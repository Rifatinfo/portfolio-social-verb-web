import TestimonialTitle from "./TestimonialTitle";

const Testimonials = () => {
    return (
        <div>
            <div className="py-12 bg-gray-50 sm:py-16 lg:py-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center">
                        <div className="text-center">
                            <p className="text-lg font-medium text-gray-600">2,157 people have said how good Rareblocks</p>
                        </div>
                        <TestimonialTitle></TestimonialTitle>

                        <div className="mt-8 text-center md:mt-16 md:order-3">
                            <a href="#" title="" className="pb-2 text-base font-bold leading-7 text-[#DD0429] transition-all duration-200 border-b-2 border-[#DD0429] hover:border-gray-600 font-none focus:outline-none  hover:text-gray-600">Check all 2,157 reviews</a>
                        </div>

                        <div className="relative mt-10 md:mt-24 md:order-2">
                            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                                <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style={{ background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)" }}></div>
                            </div>

                            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                                {/* Testimonial 1 */}
                                <div className="flex flex-col overflow-hidden shadow-xl transform transition-all hover:scale-105 duration-300">
                                    <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                        <div className="flex-1">
                                            <div className="flex items-center">
                                                {/* Star Rating */}
                                                <svg className="w-5 h-5 text-[#DD0429]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                                </svg>
                                                <svg className="w-5 h-5 text-[#DD0429]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                                </svg>
                                                {/* Repeat the above SVGs for the remaining 4 stars */}
                                            </div>
                                            <blockquote className="flex-1 mt-8">
                                                <p className="text-lg leading-relaxed text-gray-900 font-none">“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”</p>
                                            </blockquote>
                                        </div>

                                        <div className="flex items-center mt-8">
                                            <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png" alt="" />
                                            <div className="ml-4">
                                                <p className="text-base font-bold text-gray-900 font-none">Leslie Alexander</p>
                                                <p className="mt-0.5 text-sm font-none text-gray-600">Freelance React Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial 2 */}
                                <div className="flex flex-col overflow-hidden shadow-xl transform transition-all hover:scale-105 duration-300">
                                    <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                        <div className="flex-1">
                                            <div className="flex items-center">
                                                <svg className="w-5 h-5 text-[#DD0429]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                                </svg>
                                                {/* Repeat the above SVGs for the remaining 4 stars */}
                                            </div>
                                            <blockquote className="flex-1 mt-8">
                                                <p className="text-lg leading-relaxed text-gray-900 font-none">“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</p>
                                            </blockquote>
                                        </div>

                                        <div className="flex items-center mt-8">
                                            <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png" alt="" />
                                            <div className="ml-4">
                                                <p className="text-base font-bold text-gray-900 font-none">Jacob Jones</p>
                                                <p className="mt-0.5 text-sm font-none text-gray-600">Digital Marketer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Add more testimonials if needed */}
                                <div className="flex flex-col overflow-hidden shadow-xl transform transition-all hover:scale-105 duration-300">
                                    <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                        <div className="flex-1">
                                            <div className="flex items-center">
                                                <svg className="w-5 h-5 text-[#DD0429]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                                </svg>
                                                {/* Repeat the above SVGs for the remaining 4 stars */}
                                            </div>
                                            <blockquote className="flex-1 mt-8">
                                                <p className="text-lg leading-relaxed text-gray-900 font-none">“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</p>
                                            </blockquote>
                                        </div>

                                        <div className="flex items-center mt-8">
                                            <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png" alt="" />
                                            <div className="ml-4">
                                                <p className="text-base font-bold text-gray-900 font-none">Jacob Jones</p>
                                                <p className="mt-0.5 text-sm font-none text-gray-600">Digital Marketer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

 export default Testimonials