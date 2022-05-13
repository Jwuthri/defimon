import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import heroSliderData from '../assets/fake-data/data-slider';
import Slider from '../components/slider/Slider';
import Create from '../components/layouts/Create';

const Home = () => {
    return (
        <div className='home-1'>
            <Header />
            <Slider data={heroSliderData} />
            {/*<Create />*/}
            <Footer />
        </div>
    );
}

export default Home;
