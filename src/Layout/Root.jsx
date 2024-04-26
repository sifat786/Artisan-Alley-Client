import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../shared/Header";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet/>
            
            <ScrollRestoration />
        </div>
    );
};

export default Root;