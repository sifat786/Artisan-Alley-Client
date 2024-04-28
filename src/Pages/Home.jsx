import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import Teams from "../components/Teams";
import CraftItems from "../components/CraftItems";



const Home = () => {

    const loadedCrafts = useLoaderData();

    return (
        <div className="container">
            <Banner/>
            <CraftItems loadedCrafts={loadedCrafts} />
            <Feature/>
            <Teams/>
        </div>
    );
};

export default Home;