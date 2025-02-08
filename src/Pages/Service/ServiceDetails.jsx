import { useLoaderData, useParams } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import ReactPlayer from "react-player";
import { RiArrowDownSLine } from "react-icons/ri";

const ServiceDetails = () => {
    const { _id } = useParams();
    const serviceCartData = useLoaderData();
    const serviceClick = serviceCartData.find(service => service._id === parseInt(_id));
    console.log(serviceClick);

    return (
        <div className="mt-[74px]  max-w-7xl mx-auto">
            <h2 className="font-semibold text-xl text-gray-400">Home > Digital Marketing</h2>

            <div className=" grid grid-cols-1  gap-4 md:flex   md:justify-between ">
                <div className="mt-[100px]  space-y-6">
                    <p className="md:text-6xl text-2xl text-[#C73450] font-bold">Social Media Marketing</p>
                    <p className="text-gray-400 text-2xl">Driving more traffic to your website by increasing rank in,<br />
                        different search engines.</p>
                    <div className="text-center md:text-start">
                        <div>
                            <button rel="noopener noreferrer" href="#" className="md:px-6 px-7 rounded-md py-2 text-lg font-semibold md:rounded bg-[#C73450] text-gray-50 btn-outline border-2 border-[#C73450]">Get Started</button>
                        </div>

                    </div>
                </div>
                <div>
                    <img src="https://new.axilthemes.com/demo/template/cynic-bs5/illustrated-small-digital-agency/assets/images/banner/smm-banner.png" alt="" />
                </div>
            </div>

            {/* video and service button  */}
            <div className=" grid grid-cols-1  gap-4 md:flex  md:justify-between ">
                {/* video content */}
                <div className="w-full md:w-3/4 ">
                    <div className="h-[250px] md:h-[419px] relative rounded-xl overflow-hidden"> {/* Aspect ratio container */}
                        <ReactPlayer
                            url="https://www.youtube.com/embed/GWHLosmkyjM"
                            light={<img src="https://img.youtube.com/vi/GWHLosmkyjM/maxresdefault.jpg" alt="Thumbnail" className="rounded-xl" />}
                            width="100%"
                            height="100%"
                            controls={true}
                        />
                    </div>
                </div>
                {/* service button */}
                <div className="w-full md:w-1/4 h-100 space-y-2">
                    <p className="md:text-xl text-xl text-[#C73450] font-bold">Services</p>
                    <div className="flex justify-between items-center w-full md:px-6 px-7 rounded-md py-2 text-lg font-semibold md:rounded bg-[#C73450] text-gray-50 border-2 border-[#C73450]  gap-2">
                        <p> Content Development </p>
                        <p><FaArrowRightLong /></p>
                    </div>
                    <div className="flex justify-between items-center w-full md:px-6 px-7 rounded-md py-2 text-lg font-semibold md:rounded bg-[#C73450] text-gray-50 border-2 border-[#C73450]  gap-2">
                        <p>  Digital Marketing </p>
                        <p><FaArrowRightLong /></p>
                    </div>
                    <div className="flex justify-between items-center w-full md:px-6 px-7 rounded-md py-2 text-lg font-semibold md:rounded bg-[#C73450] text-gray-50 border-2 border-[#C73450]  gap-2">
                        <p> Branding & Promotion </p>
                        <p><FaArrowRightLong /></p>
                    </div>
                    <div className="flex justify-between items-center w-full md:px-6 px-7 rounded-md py-2 text-lg font-semibold md:rounded bg-[#C73450] text-gray-50 border-2 border-[#C73450]  gap-2">
                        <p> Web & App </p>
                        <p><FaArrowRightLong /></p>
                    </div>
                    <div className="flex justify-between items-center w-full md:px-6 px-7 rounded-md py-2 text-lg font-semibold md:rounded bg-[#C73450] text-gray-50 border-2 border-[#C73450]  gap-2">
                        <p>  Event & Activation </p>
                        <p><FaArrowRightLong /></p>
                    </div>
                    <div className="flex justify-between items-center w-full md:px-6 px-7 rounded-md py-2 text-lg font-semibold md:rounded bg-[#C73450] text-gray-50 border-2 border-[#C73450]  gap-2">
                        <p> Software Management</p>
                        <p><FaArrowRightLong /></p>
                    </div>
                    <div>
                        <button className=" font-semibold relative overflow-hidden w-full group border-2 border-[#C73450] text-[#C73450] rounded-md flex  justify-center gap-2 py-2 px-4 transition-all duration-300 ease-in-out">
                            <span className="absolute inset-0 bg-[#C73450] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left" style={{ zIndex: 0 }}></span>

                            <p className=" text-lg relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                                Proceed Checkout
                            </p>
                        </button>

                    </div>
                </div>
            </div>

            {/* service description  */}
            <div className="mt-14">
                <div className="w-full">
                    <div className="join join-vertical bg-base-100 md:w-3/4 w-full">
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title font-semibold">Social Media Marketing</div>
                            <div className="collapse-content text-sm">Social media is the heartbeat of modern marketing. We create compelling content, manage your social profiles, and run data-driven ad campaigns to increase engagement, build brand awareness, and drive conversions. Whether it’s Facebook, Instagram, LinkedIn, or TikTok, we tailor strategies that resonate with your audience and amplify your brand’s presence.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold">Search Engine Optimization (SEO)</div>
                            <div className="collapse-content text-sm">Dominate search engine rankings and drive organic traffic with our advanced SEO strategies. We optimize your website with keyword research, on-page SEO, technical SEO, and authoritative link-building techniques. From improving site speed to crafting high-quality content, we ensure your business stays visible and relevant in search results.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold"> Pay-Per-Click Advertising (PPC) </div>
                            <div className="collapse-content text-sm">Get instant visibility with targeted PPC campaigns. We create high-converting Google Ads and social media ads, ensuring you reach the right audience at the right time. Our data-driven approach maximizes ROI by optimizing ad copy, A/B testing creatives, and continuously refining bidding strategies to lower acquisition costs and boost conversions.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold"> Content Marketing ✍️</div>
                            <div className="collapse-content text-sm">Great content is the foundation of digital success. Our content marketing services include blog writing, video production, infographics, and more to establish your brand as an industry leader. We craft engaging and informative content that attracts, educates, and converts your audience, driving long-term business growth.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold">  Email Marketing 📩</div>
                            <div className="collapse-content text-sm">Turn leads into loyal customers with powerful email campaigns. We create personalized email sequences, newsletters, and automated drip campaigns to nurture prospects and increase retention. By leveraging segmentation, A/B testing, and compelling CTAs, we ensure your emails drive engagement and sales.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold"> Conversion Rate Optimization (CRO) 🚀</div>
                            <div className="collapse-content text-sm">Boost your website’s performance with CRO. We analyze user behavior, optimize landing pages, and implement strategic call-to-actions (CTAs) to increase conversions. Through A/B testing and data analytics, we fine-tune your website to turn visitors into paying customers effortlessly.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold"> Influencer Marketing 🤝</div>
                            <div className="collapse-content text-sm">Leverage the power of influencers to expand your reach. We connect your brand with niche influencers who can authentically promote your products or services to their engaged audience. From campaign management to performance tracking, we ensure maximum impact and ROI.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold">Affiliate Marketing 💰</div>
                            <div className="collapse-content text-sm">Grow your revenue through a strategic affiliate marketing program. We create partnerships with bloggers, influencers, and publishers who promote your brand in exchange for commissions. Our affiliate management ensures quality traffic, high conversions, and long-term profitability.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold"> Online Reputation Management (ORM) ⭐</div>
                            <div className="collapse-content text-sm">Protect and enhance your brand’s reputation online. We monitor reviews, respond to customer feedback, and implement strategies to build a positive online presence. Whether it’s handling negative press or boosting positive testimonials, we ensure your brand’s credibility stays intact.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold"> Video Marketing 🎬</div>
                            <div className="collapse-content text-sm">Engage your audience with high-quality video content. From social media reels to YouTube ads, we create compelling video stories that captivate viewers and drive action. Video marketing is the future—let us help you make a lasting impact with powerful visual storytelling.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* pricing */}
            <div className=" md:w-3/4 w-full border">
                <section className="py-20 dark:bg-gray-100 dark:text-gray-800">
                    <div className="container px-4 mx-auto">

                        <div className="max-w-2xl mx-auto mb-16 text-center">
                            <span className="font-bold tracking-wider uppercase text-[#C73450]">Pricing</span>
                            <h2 className="text-4xl font-bold lg:text-5xl text-[#C73450]">Choose your best plan</h2>
                        </div>

                        <div className="text-center mb-10">
                            <button className="px-4 py-1 font-semibold border-2 rounded-l-lg bg-[#C73450] text-white border-[#C73450]">
                                Monthly
                            </button>
                            <button className="px-4 py-1  rounded-r-lg  text-black border-2 border-[#C73450]">
                                Annually
                            </button>
                        </div>



                        <div className="flex flex-wrap items-stretch -mx-4">
                            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                                <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-50">
                                    <div className="space-y-2">
                                        <h4 className="text-2xl font-bold">Beginner</h4>
                                        <span className="text-6xl font-bold">Free</span>
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
                                    <button type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-600 dark:text-gray-50">Get Started</button>
                                </div>
                            </div>
                            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                                <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-violet-600 dark:text-gray-50">
                                    <div className="space-y-2">
                                        <h4 className="text-2xl font-bold">Pro</h4>
                                        <span className="text-6xl font-bold">$24
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
                                    <a rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded dark:bg-gray-100 dark:text-violet-600">Get Started</a>
                                </div>
                            </div>
                            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                                <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-50">
                                    <div className="space-y-2">
                                        <h4 className="text-2xl font-bold">Team</h4>
                                        <span className="text-6xl font-bold">$72
                                            <span className="text-sm tracking-wide">/month</span>
                                        </span>
                                    </div>
                                    <p className="leading-relaxed dark:text-gray-600">Phasellus ultrices bibendum nibh in vehicula.</p>
                                    <ul className="space-y-2 dark:text-gray-600">
                                        <li className="flex items-start space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>Everything in Pro</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>Fusce sem ligula</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>Curabitur dictum</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>Duis odio eros</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>Vivamus ut lectus ex</span>
                                        </li>
                                    </ul>
                                    <a rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-600 dark:text-gray-50">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ServiceDetails;

