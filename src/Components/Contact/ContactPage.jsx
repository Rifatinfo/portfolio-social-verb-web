import DetailsBar from "./DetailsBar";
import InputSide from "./InputSide";

import { motion } from "framer-motion";

const ContactPage = () => {
    return (
        <div className="mt-[74px]">
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
            className="text-2xl text-center font-extrabold md:text-5xl lg:text-4xl 
                   bg-gradient-to-r from-[#C73450] to-[#C73450] text-transparent 
                   bg-clip-text"
          >
           Get in Touch with Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-sm text-center font-medium text-body-color dark:text-dark-6 mt-2"
          >
           Have questions or need assistance? Fill out the form or reach us directly—we’re here to help!<br/> Our team will get back to you within 24 hours.
          </motion.p>
        </motion.div>
            <div className="max-w-3xl mx-auto md:flex grid grid-cols-1 gap-2 md:mt-10 mt-6">
                <DetailsBar />
                <InputSide />
            </div>
        </div>
    );
};

export default ContactPage;
