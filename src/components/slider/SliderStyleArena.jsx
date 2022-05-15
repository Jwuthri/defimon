import React  from 'react';
import { Link } from 'react-router-dom'
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import img1 from '../../assets/images/slider/carapuce.png';
import img2 from '../../assets/images/slider/carabaffe.png';
import img3 from '../../assets/images/slider/tortank.png';

import img4 from '../../assets/images/slider/bullbizarre.png';
import img5 from '../../assets/images/slider/herbizarre.png';
import img6 from '../../assets/images/slider/florizarre.png';

import img7 from '../../assets/images/slider/salameche.png';
import img8 from '../../assets/images/slider/reptincelle.png';
import img9 from '../../assets/images/slider/dracaufeu.png';

import shape1 from '../../assets/images/backgroup-secsion/bg-gradient1.png'
import shape2 from '../../assets/images/backgroup-secsion/bg-gradient2.png'
import shape3 from '../../assets/images/backgroup-secsion/bg-gradient3.png'

const SliderStyleArena = () => {
    
        return (
        <div>
            <section className="flat-title-page style3 mainslider">
                <img className="bgr-gradient gradient1" src={shape1} alt="Axies" />
                <img className="bgr-gradient gradient2" src={shape2} alt="Axies" />
                <img className="bgr-gradient gradient3" src={shape3} alt="Axies" />
                <div className="overlay"></div>
                <div className="themesflat-container ">
                        <div className="wrap-heading flat-slider flex">
                            <div className="content">
                                <h2 className="heading mt-15">Fight with Defimon to win DefiDollar rewards</h2>
                                <h1 className="heading mb-style"><span className="tf-text s1">COMING SOON</span></h1>
                            </div>
                            <Swiper
                                modules={[ Autoplay ]}
                                direction={"vertical"}
                                spaceBetween={25}
                                slidesPerView={5}
                                loop
                                autoplay={{
                                    delay: 1,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                speed= {2000}
                            >
                                <SwiperSlide><img src={img1} alt="Axies" /></SwiperSlide>
                                <SwiperSlide><img src={img2} alt="Axies" /></SwiperSlide>
                                <SwiperSlide><img src={img3} alt="Axies" /></SwiperSlide>
                                <SwiperSlide><img src={img1} alt="Axies" /></SwiperSlide>
                                <SwiperSlide><img src={img2} alt="Axies" /></SwiperSlide>
                                <SwiperSlide><img src={img3} alt="Axies" /></SwiperSlide>

                            </Swiper>
                            <Swiper
                                modules={[ Autoplay ]}
                                direction={"vertical"}
                                spaceBetween={25}
                                slidesPerView={5}
                                loop
                                autoplay={{
                                    delay: 1,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                speed= {1800}
                            >
                                <SwiperSlide><img src={img4} alt="Axies" /></SwiperSlide>
                                <SwiperSlide><img src={img5} alt="Axies" /></SwiperSlide>
                                <SwiperSlide><img src={img6} alt="Axies" /></SwiperSlide>
                                <SwiperSlide><img src={img4} alt="Axies" /></SwiperSlide>
                                <SwiperSlide><img src={img5} alt="Axies" /></SwiperSlide>
                                <SwiperSlide><img src={img6} alt="Axies" /></SwiperSlide>

                            </Swiper>
                            <Swiper
                                modules={[ Autoplay ]}
                                direction={"vertical"}
                                spaceBetween={25}
                                slidesPerView={5}
                                loop
                                autoplay={{
                                    delay: 1,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                speed= {2200}
                            >
                                <SwiperSlide><img src={img7} alt="Axies" /></SwiperSlide>
                                <SwiperSlide><img src={img8} alt="Axies" /></SwiperSlide>
                                <SwiperSlide><img src={img9} alt="Axies" /></SwiperSlide>
                                <SwiperSlide><img src={img7} alt="Axies" /></SwiperSlide>
                                <SwiperSlide><img src={img8} alt="Axies" /></SwiperSlide>
                                <SwiperSlide><img src={img9} alt="Axies" /></SwiperSlide>
                            </Swiper>

                        </div>

                    </div>
            </section>
        </div>
    );
}


export default SliderStyleArena;
