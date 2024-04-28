import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import AddCraft from "../Pages/AddCraft";
import CraftDetails from './../Pages/CraftDetails';
import PrivateRoute from "./PrivateRoute";

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
          element: <PrivateRoute><AddCraft/></PrivateRoute>,
        },
        {
          path: '/craftDetails/:id',
          element: <PrivateRoute><CraftDetails/></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/crafts/${params.id}`)
        },
      ]
    },
    
]);

export default router;