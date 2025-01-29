import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../Main/Roots";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Home/ErrorPage/ErrorPage";

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
      ],
    },
  ])

  export default router;