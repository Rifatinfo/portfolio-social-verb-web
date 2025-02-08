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
                            url="https://www.youtube.com/embed/1V-BxNgrCJM?si=QMFAkpgQEXO6ZsF-"
                            light={<img src="https://img.youtube.com/vi/1V-BxNgrCJM/maxresdefault.jpg" alt="Thumbnail" className="rounded-xl" />}
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
        </div>
    );
};

export default ServiceDetails;

