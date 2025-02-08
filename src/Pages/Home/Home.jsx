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
        <div>
            <HomePageVideo></HomePageVideo>
            <ServiceCart/>
            <Portfolio loadData={loadData}></Portfolio>
             <OurClients></OurClients>
             <Counting></Counting>
             <AboutAndTeam></AboutAndTeam>
            <TestimonialSlide></TestimonialSlide>
            <BlogSection></BlogSection>
        </div>
    );
};

export default Home;
