import { Outlet } from "react-router-dom";
import Footer from '../../src/Footer/Footer'
import Navbar from '../Navbar/Navbar'
import OurClients from "../Components/OurClients/OurClients";
import Counting from "../Components/Counting/Counting";
const Roots = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Counting></Counting>
            <OurClients></OurClients>
            <Footer></Footer>
        </div>
    );
};

export default Roots;





