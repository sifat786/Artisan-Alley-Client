import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

const router = createBrowserRouter([

    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/signin',
          element: <SignIn/>
        },
        {
          path: '/signup',
          element: <SignUp/>
        },
      ]
    },
    
]);

export default router;