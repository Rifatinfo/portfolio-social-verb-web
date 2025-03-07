import { useContext, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import NeumorphismButton from "../Components/NeumorphismButton";
import logo from '../assets/Logo.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ScrollContext } from "../../ScrollProvider";
import { scroller } from "react-scroll";
const Navbar = () => {

  const { servicesRef, scrollToSection, PortfolioRef, AboutRef, ContactRef } = useContext(ScrollContext);
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    if (location.pathname !== "/") {
      // Navigate to home first, then scroll to section
      navigate("/", { replace: true });

      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          duration: 800,
          smooth: "easeInOutQuart",
          offset: -50, // Adjust for fixed navbar
        });
      }, 500);
    } else {
      // Scroll to section directly if already on home page
      scroller.scrollTo(sectionId, {
        duration: 800,
        smooth: "easeInOutQuart",
        offset: -50,
      });
    }
  };

  return (
    <div className="bg-gray-100">
      <nav className="fixed top-0 left-0 w-full shadow bg-white z-50">
        <div className="md:max-w-7xl md:mx-auto ">
          <div className="flex justify-between items-center py-4 md:pl-0 pl-4">
            {/* Logo */}
            <div>
              <Link to="/"><img className="w-full h-[32px]" src={logo} /></Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-6  font-medium text-[#C73450] ">
              <li onClick={() => handleNavClick("home")} className="cursor-pointer transition-colors duration-300" >Home</li>
              <li onClick={() => handleNavClick("about")} className="cursor-pointer transition-colors duration-300" >About</li>
              <li onClick={() => handleNavClick("services")} className="cursor-pointer transition-colors duration-300" >Service</li>
              <li onClick={() => handleNavClick("portfolio")} className="cursor-pointer transition-colors duration-300" >Portfolio</li>
              <li onClick={() => handleNavClick("blog")} className="cursor-pointer transition-colors duration-300" >Blogs</li>
              {/* <li className="cursor-pointer transition-colors duration-300" >Status</li> */}
            </ul>
            <div className="hidden md:flex items-center gap-6 ">
              <NeumorphismButton></NeumorphismButton>

            </div>

            {/* Mobile Menu Button */}
            <div
              onClick={() => setOpen(!open)}
              className="block md:hidden text-gray-800 focus:outline-none mr-4 md:mr-0"
            >
              {open ? <IoClose className="text-3xl" /> : <IoMenu className="text-3xl" />}
            </div>
          </div>
        </div>


        {/* Mobile Menu */}
        <div
          className={`absolute top-0 right-0 h-screen bg-white shadow-lg w-8/12 transition-transform duration-300 transform 
          ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-end p-4">
            <IoClose
              className="text-3xl cursor-pointer text-gray-800"
              onClick={() => setOpen(false)}
            />
          </div>
          <ul className="flex flex-col items-center space-y-4 pt-10 text-gray-700 font-medium">
            <li onClick={() => {handleNavClick("home"); setOpen(false)}} className="cursor-pointer transition-colors duration-300" >Home</li>
            <li onClick={() => { handleNavClick("about"); setOpen(false) }} className="cursor-pointer transition-colors duration-300" >About</li>
            <li onClick={() => { handleNavClick("services"); setOpen(false) }} className="cursor-pointer transition-colors duration-300" >Service</li>
            <li onClick={() => { handleNavClick("portfolio"); setOpen(false) }} className="cursor-pointer transition-colors duration-300" >Portfolio</li>
            <li onClick={() => { handleNavClick("blog"); setOpen(false) }} className="cursor-pointer transition-colors duration-300" >Blogs</li>
            <div>
              <NeumorphismButton></NeumorphismButton>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;