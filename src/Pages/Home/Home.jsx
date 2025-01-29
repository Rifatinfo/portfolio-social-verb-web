import Navbar from '../../Navbar/Navbar';
import Slider from "../../Components/Slider/Slider";
import PageTitle2 from '../../Components/PageTitle2/PageTitle2';
import Portfolio from '../../Components/Portfolio/Portfolio';
import { useLoaderData } from 'react-router-dom';
const Home = () => {
    const loadData = useLoaderData();
    console.log(loadData)
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <PageTitle2></PageTitle2>
            <Portfolio loadData={loadData}></Portfolio>
        </div>
    );
};

export default Home;
