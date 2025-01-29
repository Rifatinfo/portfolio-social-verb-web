import Navbar from '../../Navbar/Navbar';
import Slider from "../../Components/Slider/Slider";
import PageTitle2 from '../../Components/PageTitle2/PageTitle2';
import Portfolio from '../../Components/Portfolio/Portfolio';
import { useLoaderData } from 'react-router-dom';
import OurClients from '../../Components/OurClients/OurClients';
import Counting from '../../Components/Counting/Counting';
const Home = () => {
    const loadData = useLoaderData();
    console.log(loadData)
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <PageTitle2></PageTitle2>
            <Portfolio loadData={loadData}></Portfolio>
            <Counting></Counting>
            <OurClients></OurClients>
        </div>
    );
};

export default Home;
