import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet/>
            <Footer/>
            <ScrollRestoration />
        </div>
    );
};

export default Root;