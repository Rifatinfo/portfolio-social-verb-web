import Slider from "../../Components/Slider/Slider";
import Portfolio from '../../Components/Portfolio/Portfolio';
import { useLoaderData } from 'react-router-dom';
import OurClients from '../../Components/OurClients/OurClients';
import Counting from '../../Components/Counting/Counting';
import BlogSection from "../../Components/BlogSection/BlogSection";
// import TeamSection from "../../Components/OurTeam/TeamSection";
import Contact from "../Contact/Contact";
import Testimonials from "../../Components/Testimonials/Testimonials";
import ServicesCart from "../Service/ServicesCart";
import { useContext } from "react";
import { ScrollContext } from "../../../ScrollProvider";
import AboutAndTeam from "../../Components/AboutAndTeam/AboutAndTeam";
// import { useContext } from "react";
// import { ScrollContext } from "../../../ScrollProvider";
// import OurTeam from "../../Components/OurTeam/OurTeam";

const Home = () => {
    const {HomeRef} = useContext(ScrollContext);
    const loadData = useLoaderData();
    console.log(loadData)

    // const { servicesRef } = useContext(ScrollContext);
    
    return (
        <div ref={HomeRef}>
            <Slider></Slider>
            <Portfolio loadData={loadData}></Portfolio>
            <ServicesCart></ServicesCart>
            <OurClients></OurClients>
             <Counting></Counting>
             <AboutAndTeam></AboutAndTeam>
            {/* <TeamSection></TeamSection> */}
            <Contact></Contact>
            <Testimonials></Testimonials>
            <BlogSection></BlogSection>
        </div>
    );
};

export default Home;
