import { motion } from "framer-motion";
import BlogSectionTitle from "./BlogSectionTitle";

const blogs = [
    {
        id: 1,
        title: "How Content Marketing Boosts Brands",
        date: "June 1, 2020",
        views: "2.1K views",
        imgSrc: "https://www.material-tailwind.com/image/blog-16.jpeg",
      },
      {
        id: 2,
        title: "Video Marketing: The Future of Advertising",
        date: "June 2, 2020",
        views: "2.2K views",
        imgSrc: "https://www.material-tailwind.com/image/blog-15.png",
      },
      {
        id: 3,
        title: "The Power of Social Media Strategy",
        date: "June 3, 2020",
        views: "2.3K views",
        imgSrc: "https://www.material-tailwind.com/image/blog-17.jpeg",
      },
      {
        id: 4,
        title: "How to Create Engaging Ads for Your Business",
        date: "June 4, 2020",
        views: "2.4K views",
        imgSrc: "https://www.material-tailwind.com/image/blog-18.jpeg",
      },
];

export default function BlogSection() {
  return (
    <section className=" text-gray-800">
      <div className="md:max-w-7xl  md:mx-auto">
         <BlogSectionTitle></BlogSectionTitle>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <a href="#" className="overflow-hidden">
                <motion.img
                  src={blog.imgSrc}
                  alt={blog.title}
                  className="object-cover w-full h-52 transition-transform duration-500 hover:scale-110"
                />
              </a>
              <div className="flex flex-col flex-1 p-4">
                <a href="#" className="text-xs uppercase font-medium tracking-wider text-[#DD0429] hover:underline">
                  Convenire
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-[#DD0429] hover:text-gray-700 transition-colors duration-300">
                  {blog.title}
                </h3>
                <div className="flex justify-between text-xs text-gray-600 pt-3">
                  <span>{blog.date}</span>
                  <span>{blog.views}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
