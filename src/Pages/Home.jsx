// import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import Teams from "../components/Teams";
import CraftItems from "../components/CraftItems";



const Home = () => {

    return (
        <div className="container">
            <Banner/>
            <CraftItems/>
            <Feature/>
            <Teams/>
        </div>
    );
};

export default Home;