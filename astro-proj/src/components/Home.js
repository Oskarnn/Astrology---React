import Heropic from './prayPictureBlackWhite.png'
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div className="contentBox">
        <div className="home">
            <Navbar/>
            <div className="hero">
                <div className="heroSection">

                    <h1 className="heroLogo">ASTROLOGY</h1>
                    <img className="heroPic" src={Heropic} alt="Astrology logo"/>

                </div>

                <div className="funcLink"><a href="/horoscope">GET YOUR HOROSCOPE</a></div>
            </div>
        </div>
        </div>
     );
}

export default Home;
