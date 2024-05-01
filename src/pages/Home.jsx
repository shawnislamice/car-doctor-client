
import { Helmet } from 'react-helmet-async';
import Slider from '../components/Slider';
import QualifiedExpreience from '../components/QualifiedExpreience';
import Service from '../components/Service';
import Contact from '../components/Contact';
import Products from '../components/Products';
import MeetOurTeam from '../components/MeetOurTeam';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home: Car Dorctor</title>
            </Helmet>
            <Slider></Slider>
            <QualifiedExpreience></QualifiedExpreience>
            <Service></Service>
            <Contact></Contact>
            <Products></Products>
            <MeetOurTeam></MeetOurTeam>
        </div>
    );
};

export default Home;