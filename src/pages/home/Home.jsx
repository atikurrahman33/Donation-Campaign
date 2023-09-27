import { useLoaderData } from "react-router-dom";
import Banner from "../../components/header/banner/Banner";
import Cards from "../../components/cards/cards";





const Home = () => {
    const items= useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <Cards items={items}></Cards>
            
        </div>
    );
};

export default Home;