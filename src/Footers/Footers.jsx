import { FaSquareFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";


const Footer = () => {
  return (
    <div className="mt-4 -mb-20 shadow-[0px_-4px_10px_rgba(0,0,0,0.1)] bg-white text-[#C73450]">
      <footer>
        <div className="max-w-7xl  flex flex-col mx-auto  lg:flex-row md:h-[60px]">
          <ul className="self-center md:py-6 py-2 space-y-4 text-center flex  gap-3 sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start font-semibold">
            <li>Contact</li>
          </ul>

          <div className="flex flex-col justify-center pt-6 lg:pt-0 text-2xl mb-1">
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
