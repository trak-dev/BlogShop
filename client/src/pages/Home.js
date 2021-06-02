
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Photos from "../components/Photo";

const Home = () => {
    return(
        <div className="home">
            <Navigation/>
            <Logo/>
            <Photos/>
        </div> 
    );
};
export default Home;