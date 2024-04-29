import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AddCraft from "../Pages/AddCraft";
import AllCraft from "../Pages/AllCraft";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import MyCraft from "../Pages/MyCraft";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import UpdateCraft from "../Pages/UpdateCraft";
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
          path: '/update/:id',
          element: <PrivateRoute><UpdateCraft/></PrivateRoute>,
          loader: ({params}) => fetch(`https://artisan-alley-server-j4rfxbmvn-sifats-projects-19e6a574.vercel.app/crafts/${params.id}`)
        },
        {
          path: '/addCraft',
          element: <PrivateRoute><AddCraft/></PrivateRoute>,
        },
        {
          path: '/myCraft',
          element: <PrivateRoute><MyCraft/></PrivateRoute>,
        },
        {
          path: '/allCraft',
          element: <AllCraft/>,
        },
        {
          path: '/craftDetails/:id',
          element: <PrivateRoute><CraftDetails/></PrivateRoute>,
        },
      ]
    },
    
]);

export default router;