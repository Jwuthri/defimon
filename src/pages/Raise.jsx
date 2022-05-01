import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import TodayPicks from '../components/layouts/explore-03/TodayPicks';
import todayPickData from '../assets/fake-data/data-today-pick';

const Raise = () => {
    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Raise</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>Raise</li>
                                </ul>
                            </div>
                            <p className="sub-title ct small mg-bt-20 pad-420">
                                Gain experience by stacking your coins or Nfts
                            </p>
                        </div>
                    </div>
                </div>                    
            </section>
            <TodayPicks data={todayPickData} />
            <Footer />
        </div>
    );
}

export default Raise;