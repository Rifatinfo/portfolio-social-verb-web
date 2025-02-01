// import { useContext } from "react";
import ContactTitle from "./ContactTitle";
// import { ScrollContext } from "../../../ScrollProvider";


const Contact = () => {
    //  const {ContactRef} = useContext(ScrollContext);
    return (
        <div>
            <section  className="py-12 bg-gray-100 text-gray-900">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">

                    {/* Left Side - Contact Info */}
                    <div className="py-6 md:py-0 md:px-6 animate__animated animate__fadeInLeft">
                        {/* <h1 className="text-4xl font-bold text-[#DD0429] animate__animated animate__fadeInDown">
                           
                        </h1> */}
                        <ContactTitle></ContactTitle>
                        <p className="pt-2 pb-4 text-gray-700 animate__animated animate__fadeIn animate__delay-1s">
                            Fill in the form to start a conversation
                        </p>

                        <div className="space-y-4">
                            {[
                                { text: "10 Road Bosila City housing, Mohammadpur Dhaka, 1207", icon: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" },
                                { text: "+008 016 716 615 56", icon: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" },
                                { text: "socialvforu@gmail.com", icon: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" }
                            ].map(({ text, icon }, index) => (
                                <p className="flex items-center animate__animated animate__fadeInUp animate__delay-2s" key={index}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-3 text-[#DD0429]">
                                        <path fillRule="evenodd" d={icon} clipRule="evenodd"></path>
                                    </svg>
                                    <span>{text}</span>
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <form noValidate className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 animate__animated animate__fadeInRight">

                        {["Full Name", "Email Address"].map((label, index) => (
                            <label className="block animate__animated animate__fadeInUp animate__delay-3s" key={index}>
                                <span className="mb-1 text-gray-700 font-medium">{label}</span>
                                <input type={label === "Email Address" ? "email" : "text"} placeholder={`Enter ${label}`} className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#DD0429] focus:border-[#DD0429] p-2 transition-all duration-300" />
                            </label>
                        ))}

                        {/* Message Input */}
                        <label className="block animate__animated animate__fadeInUp animate__delay-3s">
                            <span className="mb-1 text-gray-700 font-medium">Message</span>
                            <textarea rows="3" placeholder="Type your message here..." className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#DD0429] focus:border-[#DD0429] p-2 transition-all duration-300"></textarea>
                        </label>

                        {/* Submit Button with Hover Effect */}
                        <button type="button" className="relative inline-block px-8 py-2 w-full hover:text-[#DD0429] font-semibold text-white bg-[#DD0429] border-2 border-[#DD0429] rounded-lg group overflow-hidden self-center transition-transform duration-300 transform hover:scale-105">
                            <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition duration-300 ease-out"></span>
                            <span className="relative">Submit</span>
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
