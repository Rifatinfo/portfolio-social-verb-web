import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../Main/Roots";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Home/ErrorPage/ErrorPage";
import VideoDetails from "../Pages/Home/VideoDetails/VideoDetails";
import OurTeam from "../Components/OurTeam/OurTeam";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
// import ServiceCart from "../Pages/Service/ServiceCart";
import ServiceDetails from "../Pages/Service/ServiceDetails";
import ContactPage from "../Components/Contact/ContactPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader : () => fetch('../data.json')
        },
        {
            path:"video/:id",
            element : <VideoDetails></VideoDetails>,
            loader : () => fetch('../data.json')
        },
        {
            path : "/our-team",
            element : <OurTeam></OurTeam>
        },
        {
            path : "/login",
            element : <Login></Login>
        },
        {
            path : "/signup",
            element : <SignUp></SignUp>
        },
        {
            path : "/contact",
            element : <ContactPage/>
        },
        {
            path : "service/:_id",
            element : <ServiceDetails></ServiceDetails>,
            loader : () => fetch('../serviceData.json')
        },
      ],
    },
  ])

  export default router;