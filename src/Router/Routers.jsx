import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../Main/Roots";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Home/ErrorPage/ErrorPage";
import VideoDetails from "../Pages/Home/VideoDetails/VideoDetails";
import OurTeam from "../Components/OurTeam/OurTeam";
import Login from "../Pages/Login/Login";

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
        }
      ],
    },
  ])

  export default router;