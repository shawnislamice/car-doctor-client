
import { Helmet } from 'react-helmet-async';
import Slider from '../components/Slider';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home: Car Dorctor</title>
            </Helmet>
            <Slider></Slider>
        </div>
    );
};

export default Home;