import Slider from "../../Components/Slider/Slider";
import PageTitle2 from '../../Components/PageTitle2/PageTitle2';
import Portfolio from '../../Components/Portfolio/Portfolio';
import { useLoaderData } from 'react-router-dom';
import OurClients from '../../Components/OurClients/OurClients';
import Counting from '../../Components/Counting/Counting';
import BlogSection from "../../Components/BlogSection/BlogSection";
import TeamSection from "../../Components/OurTeam/TeamSection";
import Contact from "../Contact/Contact";
import Testimonials from "../../Components/Testimonials/Testimonials";
// import OurTeam from "../../Components/OurTeam/OurTeam";
const Home = () => {
    const loadData = useLoaderData();
    console.log(loadData)
    return (
        <div>
            <Slider></Slider>
            <PageTitle2></PageTitle2>
            <Portfolio loadData={loadData}></Portfolio>
             <Counting></Counting>
            <OurClients></OurClients>
            <TeamSection></TeamSection>
            <Contact></Contact>
            <Testimonials></Testimonials>
            <BlogSection></BlogSection>
            {/* <OurTeam></OurTeam> */}
        </div>
    );
};

export default Home;
