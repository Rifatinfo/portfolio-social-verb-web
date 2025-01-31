import { useContext, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import NeumorphismButton from "../Components/NeumorphismButton";
import { FaCartShopping } from "react-icons/fa6";

// import logo from '../assets/Social_verb_logo.png';
import logo1 from '../assets/social.svg';
import { Link } from "react-router-dom";
import { ScrollContext } from "../../ScrollProvider";
const Navbar = () => {

  const { servicesRef, scrollToSection, PortfolioRef, AboutRef, ContactRef , HomeRef} = useContext(ScrollContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-100">
      <nav className="fixed top-0 left-0 w-full shadow bg-white z-50">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <Link onClick={() => scrollToSection(HomeRef)}> <img className=" h-[38px]" src={logo1} alt="" /></Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
            <li onClick={() => scrollToSection(HomeRef)} className="cursor-pointer transition-colors duration-300">Home</li>
            <li onClick={() => scrollToSection(servicesRef)} className="cursor-pointer transition-colors duration-300" >Service</li>
            <li onClick={() => scrollToSection(PortfolioRef)} className="cursor-pointer transition-colors duration-300" >Portfolio</li>
            <li onClick={() => scrollToSection(AboutRef)} className="cursor-pointer transition-colors duration-300" >About</li>
            <li onClick={() => scrollToSection(ContactRef)} className="cursor-pointer transition-colors duration-300" >Contact</li>
            <li className="cursor-pointer transition-colors duration-300" >Order</li>
            <li className="cursor-pointer transition-colors duration-300" >Dashboard</li>
          </ul>
          <div className="hidden md:flex items-center gap-6 ">
            <p className="text-xl visible"><FaCartShopping /></p>
            <NeumorphismButton></NeumorphismButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden"> <p className="text-xl ml-18 md:ml-0 md:hidden"><FaCartShopping /></p></div>
          <div
            onClick={() => setOpen(!open)}
            className="block md:hidden text-gray-800 focus:outline-none"
          >
            {open ? <IoClose className="text-3xl" /> : <IoMenu className="text-3xl" />}
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
            <li className="cursor-pointer transition-colors duration-300" >Home</li>
            <li onClick={() => { scrollToSection(servicesRef); setOpen(false) }} className="cursor-pointer transition-colors duration-300" >Service</li>
            <li onClick={() => { scrollToSection(PortfolioRef); setOpen(false) }} className="cursor-pointer transition-colors duration-300" >Portfolio</li>
            <li onClick={() => { scrollToSection(AboutRef); setOpen(false) }} className="cursor-pointer transition-colors duration-300" >About</li>
            <li onClick={() => { scrollToSection(ContactRef); setOpen(false) }} className="cursor-pointer transition-colors duration-300" >Contact</li>
            <li className="cursor-pointer transition-colors duration-300" >Order</li>
            <li className="cursor-pointer transition-colors duration-300" >Dashboard</li>
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