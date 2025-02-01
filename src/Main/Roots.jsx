import { Outlet } from "react-router-dom";
import Footer from '../../src/Footer/Footer'
import Navbar from '../Navbar/Navbar'
const Roots = () => {
    return (
        <div>

            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>


        </div>
    );
};

export default Roots;





