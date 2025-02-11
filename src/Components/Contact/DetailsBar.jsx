import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "react-feather";

const DetailsBar = () => {
  return (
    <div className=" bg-[#C73450] text-white shadow-lg rounded-lg p-8 flex flex-col items-center relative pb-24">
      {/* Contact Info */}
      <div className="text-center">
        <p className="text-lg font-bold">Contact Information</p>
        <p className="text-sm mt-2">
          Fill up the form and our team will get back to you within 24 hours
        </p>
      </div>

      {/* Contact Details */}
      <div className="mt-6 space-y-4">
        {/* Phone */}
        <a href="tel:+233543201893" className="flex items-center space-x-2 hover:text-gray-200 transition">
          <Phone size={16} />
          <span className="text-sm">+233543201893</span>
        </a>

        {/* Email */}
        <a href="mailto:aljay3334@gmail.com" className="flex items-center space-x-2 hover:text-gray-200 transition">
          <Mail size={16} />
          <span className="text-sm">socialverb@gmail.com</span>
        </a>

        {/* Address */}
        <div className="flex items-center space-x-2">
          <MapPin size={30} />
          <span className="text-sm">10 Road, Bosila City Housing, Mohammadpur, Dhaka 1207</span>
        </div>
      </div>


      {/* Social Links */}
      <div className="flex space-x-4 absolute bottom-6">
        <a href="https://www.facebook.com/profile.php?id=100021937291259" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
          <Facebook size={20} />
        </a>
        <a href="https://www.instagram.com/_allenjones/" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
          <Instagram size={20} />
        </a>
        <a href="https://www.linkedin.com/in/allen-jones-b799b7171/" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  );
};

export default DetailsBar;
