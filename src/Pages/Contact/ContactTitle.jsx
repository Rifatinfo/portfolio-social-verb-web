import { motion } from "framer-motion";
import { useContext } from "react";
import { ScrollContext } from "../../../ScrollProvider";

const ContactTitle = () => {
    const {ContactRef} = useContext(ScrollContext);
    return (
        <div ref={ContactRef}>
            <motion.div
                className="text-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1
                    className="text-2xl font-extrabold md:text-4xl lg:text-4xl 
                   bg-gradient-to-r from-[#DD0429] to-red-600 text-transparent 
                   bg-clip-text drop-shadow-lg"
                >
                   Get in Touch
                </h1>
            </motion.div>
        </div>
    );
};

export default ContactTitle;