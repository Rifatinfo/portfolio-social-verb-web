
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutAndTeam = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <div className="max-w-7xl mx-auto md:p-0 px-2 ">
            {/* about */}
            <div className="flex flex-col md:flex-row items-center justify-between  py-12 ">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-lg"
                >
                    <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="text-2xl font-extrabold md:text-5xl lg:text-4xl 
                   bg-gradient-to-r from-[#C73450] to-red-600 text-transparent 
                   bg-clip-text drop-shadow-lg"
                        >
                          Why Choose Social Verb?
                        </motion.h2>
                    <p className="mt-4 text-gray-700">
                        At <span className="font-semibold text-[#C73450]">Social Verb</span>, we bring brands to life with strategic digital solutions.
                        Our team blends creativity, data-driven insights, and innovation to deliver impactful results.
                    </p>

                    {/* Learn More Button */}
                    <button className="mt-6 text-[#C73450] font-semibold text-lg relative group">
                        Learn More About Us
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C73450] transition-all duration-300 group-hover:w-full"></span>
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <img
                        src="https://axilthemes.com/themes/cynic/illustrated-small-digital-agency/wp-content/uploads/2019/10/features-img-1.png"
                        alt="Why Choose Us"
                        className="w-full md:w-[400px] rounded-lg shadow-lg"
                    />
                </motion.div>
            </div>
            {/* Team */}
            <div className="flex flex-col md:flex-row items-center justify-between  py-12">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <img
                        src="https://axilthemes.com/themes/cynic/illustrated-small-digital-agency/wp-content/uploads/2019/10/features-img-2.png"
                        alt="Our Team"
                        className="w-full md:w-[400px] rounded-lg shadow-lg"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-lg"
                >
                    <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="text-2xl font-extrabold md:text-5xl lg:text-4xl 
                   bg-gradient-to-r from-[#C73450] to-red-600 text-transparent 
                   bg-clip-text drop-shadow-lg"
                        >
                         Meet Our Creative Minds
                        </motion.h2>
                    <p className="mt-4 text-gray-700">
                        Our team at <span className="font-semibold text-[#C73450]">Social Verb</span> is a powerhouse of **strategists, designers, and marketers** dedicated to driving your brand’s success.
                        With a blend of innovation and experience, we turn ideas into impactful digital experiences.
                    </p>

                    {/* Learn More Button */}
                    <Link to="/our-team">
                    <button className="mt-6 text-[#DD0429] font-semibold text-lg relative group">
                        Learn More About Our Team
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C73450] transition-all duration-300 group-hover:w-full"></span>
                    </button>
                    </Link>
                </motion.div>
            </div>
        </div>

    );
};

export default AboutAndTeam;



