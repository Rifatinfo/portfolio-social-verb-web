import { useLoaderData, useParams } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import ReactPlayer from "react-player";
import ServicePricing from "../../Components/ServicePricing/ServicePricing";
import { IoIosArrowForward } from "react-icons/io";
import Portfolio from "../../Components/Portfolio/Portfolio";
import { motion } from "framer-motion";

const ServiceDetails = () => {
    const loadData = useLoaderData();
    console.log(loadData)
    const { _id } = useParams();
    const serviceCartData = useLoaderData();
    const serviceClick = serviceCartData.find(service => service._id === parseInt(_id));
    console.log(serviceClick);

    return (
        <div className="mt-[74px]  max-w-7xl mx-auto">
            
             <div className="flex gap-1 items-center">
                <p className="text-gray-400 font-semibold">Home</p>
             <h2 className="font-semibold text-xl text-gray-400"><IoIosArrowForward className="text-gray-400" /></h2>
            <p className="text-gray-400 font-semibold">Digital Marketing</p>
             </div>

             {/* video and service button  */}
             <div className=" grid grid-cols-1  gap-4 md:flex  md:justify-between  mt-10">
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
                <div className="w-full md:w-1/4 h-100 space-y-4">
                    <p className="md:text-xl text-xl text-[#C73450] font-bold">Services</p>
                    <div className="cursor-pointer flex justify-between items-center w-full md:px-6 px-7 rounded-md py-2 text-lg font-semibold md:rounded bg-[#C73450] text-gray-50 border-2 border-[#C73450]  gap-2">
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

                </div>
            </div>

            <div className=" grid grid-cols-1  gap-4 md:flex  md:justify-between md:mt-10 mt-8">
                <div className="mt-[50px]  space-y-6">
                    <p className="md:text-3xl text-lg text-[#C73450] font-bold">Social Media Marketing</p>
                    <p className="text-gray-400 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis magni quia qui<br /> corrupti unde quam ipsum, officiis nemo voluptatem, nesciunt error aut similique eaque sit ex ut. <br /> Et explicabo id in corporis natus nisi voluptas neque, itaque culpa perferendis unde! <br /> Veritatis officiis nihil cumque eligendi iure doloribus quo nemo exercitationem, <br /> facilis explicabo culpa corrupti at provident non distinctio ad.</p>
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

           
            {/* pricing */}
            <ServicePricing />
            {/* <ClientsSlider /> */}
            {/* <Portfolio loadData={loadData} /> */}

            {/* frequently asked */}
            <div className="mt-14">
                <div className="w-full">
                    {/* title of frequently asked  */}
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
                            className="text-2xl mb-10 font-extrabold md:text-5xl lg:text-4xl 
                   bg-gradient-to-r from-[#C73450] to-red-600 text-transparent 
                   bg-clip-text"
                        >
                          Frequently Asked Questions
                        </motion.h2>
                    </motion.div>
                    <div className="join join-vertical bg-base-100 md:w-3/4 w-full">
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title font-semibold text-[#C73450] text-xl">Social Media Marketing</div>
                            <div className="collapse-content text-sm">Social media is the heartbeat of modern marketing. We create compelling content, manage your social profiles, and run data-driven ad campaigns to increase engagement, build brand awareness, and drive conversions. Whether it’s Facebook, Instagram, LinkedIn, or TikTok, we tailor strategies that resonate with your audience and amplify your brand’s presence.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold text-[#C73450] text-xl">Search Engine Optimization (SEO)</div>
                            <div className="collapse-content text-sm">Dominate search engine rankings and drive organic traffic with our advanced SEO strategies. We optimize your website with keyword research, on-page SEO, technical SEO, and authoritative link-building techniques. From improving site speed to crafting high-quality content, we ensure your business stays visible and relevant in search results.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold text-[#C73450] text-xl"> Pay-Per-Click Advertising (PPC) </div>
                            <div className="collapse-content text-sm">Get instant visibility with targeted PPC campaigns. We create high-converting Google Ads and social media ads, ensuring you reach the right audience at the right time. Our data-driven approach maximizes ROI by optimizing ad copy, A/B testing creatives, and continuously refining bidding strategies to lower acquisition costs and boost conversions.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold text-[#C73450] text-xl"> Content Marketing </div>
                            <div className="collapse-content text-sm">Great content is the foundation of digital success. Our content marketing services include blog writing, video production, infographics, and more to establish your brand as an industry leader. We craft engaging and informative content that attracts, educates, and converts your audience, driving long-term business growth.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold text-[#C73450] text-xl">  Email Marketing </div>
                            <div className="collapse-content text-sm">Turn leads into loyal customers with powerful email campaigns. We create personalized email sequences, newsletters, and automated drip campaigns to nurture prospects and increase retention. By leveraging segmentation, A/B testing, and compelling CTAs, we ensure your emails drive engagement and sales.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold text-[#C73450] text-xl"> Conversion Rate Optimization (CRO) </div>
                            <div className="collapse-content text-sm">Boost your website’s performance with CRO. We analyze user behavior, optimize landing pages, and implement strategic call-to-actions (CTAs) to increase conversions. Through A/B testing and data analytics, we fine-tune your website to turn visitors into paying customers effortlessly.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold text-[#C73450] text-xl"> Influencer Marketing </div>
                            <div className="collapse-content text-sm">Leverage the power of influencers to expand your reach. We connect your brand with niche influencers who can authentically promote your products or services to their engaged audience. From campaign management to performance tracking, we ensure maximum impact and ROI.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold text-[#C73450] text-xl">Affiliate Marketing </div>
                            <div className="collapse-content text-sm">Grow your revenue through a strategic affiliate marketing program. We create partnerships with bloggers, influencers, and publishers who promote your brand in exchange for commissions. Our affiliate management ensures quality traffic, high conversions, and long-term profitability.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold text-[#C73450] text-xl"> Online Reputation Management (ORM) </div>
                            <div className="collapse-content text-sm">Protect and enhance your brand’s reputation online. We monitor reviews, respond to customer feedback, and implement strategies to build a positive online presence. Whether it’s handling negative press or boosting positive testimonials, we ensure your brand’s credibility stays intact.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold text-[#C73450] text-xl"> Video Marketing</div>
                            <div className="collapse-content text-sm">Engage your audience with high-quality video content. From social media reels to YouTube ads, we create compelling video stories that captivate viewers and drive action. Video marketing is the future—let us help you make a lasting impact with powerful visual storytelling.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;

