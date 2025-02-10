import { Outlet } from "react-router-dom";
import Navbar from '../Navbar/Navbar'
import Footers from "../Footers/Footers";
const Roots = () => {

    return (
        <div>

            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footers></Footers>
        </div>
    );
};

export default Roots;





