
import { Helmet } from 'react-helmet-async';
import Slider from '../components/Slider';
import QualifiedExpreience from '../components/QualifiedExpreience';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home: Car Dorctor</title>
            </Helmet>
            <Slider></Slider>
            <QualifiedExpreience></QualifiedExpreience>
        </div>
    );
};

export default Home;