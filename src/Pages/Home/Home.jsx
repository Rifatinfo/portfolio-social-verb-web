import Portfolio from '../../Components/Portfolio/Portfolio';
import { useLoaderData } from 'react-router-dom';
import OurClients from '../../Components/OurClients/OurClients';
import Counting from '../../Components/Counting/Counting';
import BlogSection from "../../Components/BlogSection/BlogSection";
// import Testimonials from "../../Components/Testimonials/Testimonials";
import AboutAndTeam from "../../Components/AboutAndTeam/AboutAndTeam";
import HomePageVideo from '../../Components/HomePageVideo/HomePageVideo';
import Cart from '../Service/cart';
import TestimonialSlide from '../../Components/Testimonials/TestimonialSlide';


const Home = () => {
    const loadData = useLoaderData();
    console.log(loadData)

    
    return (
        <div>
            <HomePageVideo></HomePageVideo>
             <Cart></Cart>
            <Portfolio loadData={loadData}></Portfolio>
             <OurClients></OurClients>
             <Counting></Counting>
             <AboutAndTeam></AboutAndTeam>
            {/* <Testimonials></Testimonials> */}
            <TestimonialSlide></TestimonialSlide>
            <BlogSection></BlogSection>
        </div>
    );
};

export default Home;
