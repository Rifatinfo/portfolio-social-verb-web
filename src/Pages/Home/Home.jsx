import Portfolio from '../../Components/Portfolio/Portfolio';
import { useLoaderData } from 'react-router-dom';
import OurClients from '../../Components/OurClients/OurClients';
import Counting from '../../Components/Counting/Counting';
import BlogSection from "../../Components/BlogSection/BlogSection";
import AboutAndTeam from "../../Components/AboutAndTeam/AboutAndTeam";
import HomePageVideo from '../../Components/HomePageVideo/HomePageVideo';
import TestimonialSlide from '../../Components/Testimonials/TestimonialSlide';
import ServiceCart from '../Service/ServiceCart';



const Home = () => {
    const loadData = useLoaderData();
    console.log(loadData)


    return (
        <div id="home">
            <HomePageVideo></HomePageVideo>
            <div id="services">
                <ServiceCart />
            </div>
            <div  id="portfolio">
                <Portfolio loadData={loadData}></Portfolio>
            </div>
            <OurClients></OurClients>
            <Counting></Counting>
            <div id="about">
                <AboutAndTeam></AboutAndTeam>
            </div>
            <TestimonialSlide></TestimonialSlide>
            <div id="blog">
                <BlogSection></BlogSection>
            </div>
        </div>
    );
};

export default Home;
