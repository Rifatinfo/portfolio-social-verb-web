import { motion } from "framer-motion";

const BlogSectionTitle = () => {
    return (
        <div>
            <motion.div
      className="mt-28 mb-10 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1
        className="text-2xl font-extrabold md:text-5xl lg:text-4xl 
                   bg-gradient-to-r from-[#DD0429] to-red-600 text-transparent 
                   bg-clip-text drop-shadow-lg"
      >
       Blogs & News
      </h1>

      <p className="mt-4 text-lg text-gray-600 md:text-xl lg:text-2xl">
      Stay updated with our latest trends and insights.
      </p>
    </motion.div>
        </div>
    );
};

export default BlogSectionTitle;
