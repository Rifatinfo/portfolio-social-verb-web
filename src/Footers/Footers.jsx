import { FaSquareFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";


const Footer = () => {
  return (
    <div className="mt-4 -mb-20 shadow-[0px_-4px_10px_rgba(0,0,0,0.1)] bg-white text-[#C73450]">
      <footer>
        <div className="max-w-7xl  flex md:justify-end justify-center items-center mx-auto  md:h-[60px]">
          <div className="flex flex-col justify-center pt-6 lg:pt-0 text-2xl md:mb-1 mb-4">
            <div className="flex justify-center space-x-4">
              <a >
                <FaSquareFacebook />
              </a>
              <a >
                <FaLinkedin />
              </a>
              <a>
                <IoLogoYoutube />
              </a>
              <a>
                <FaSquareXTwitter />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
