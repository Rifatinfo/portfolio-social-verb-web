import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-100 dark:text-gray-900">
                <div className="container flex justify-between flex-col p-4 mx-auto md:p-4 lg:flex-row dark:divide-gray-600">
               <div className="text-center font-semibold">
               <p>Social Verb Copyright © {new Date().getFullYear()} - All Right Reserved</p>
               </div>
                    <div className="flex flex-col justify-center pt-6 lg:pt-0">
                        <div className="flex justify-center space-x-4 text-2xl">
                            <a href=""><FaFacebookSquare /></a>
                            <a href=""><FaLinkedin /></a>
                            <a href=""><FaSquareXTwitter /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;