import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import AddCraft from "../Pages/AddCraft";

const router = createBrowserRouter([

    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <Home/>,
          loader: () => fetch('http://localhost:5000/crafts')
        },
        {
          path: '/signin',
          element: <SignIn/>
        },
        {
          path: '/signup',
          element: <SignUp/>
        },
        {
          path: '/addCraft',
          element: <AddCraft/>,
        },
      ]
    },
    
]);

export default router;