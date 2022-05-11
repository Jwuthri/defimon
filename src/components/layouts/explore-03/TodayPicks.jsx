import React , { useState , Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import CardModal from '../CardModal';

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}


const TodayPicks = props => {
    const data = props.data;

    const [modalShow, setModalShow] = useState(false);
    return (
        <Fragment>
            <section className="tf-explore-2 tf-section live-auctions">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-12">
                            {/*<h2 className="tf-title-heading ct style-2 mg-bt-13">*/}
                            {/*    Farm*/}
                            {/*</h2>*/}
                            {/*<p className="sub-title ct small mg-bt-20 pad-420">*/}
                            {/*    Gain experience by stacking your coins or Nfts*/}
                            {/*</p>*/}
                            {

                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={30}

                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                        },
                                        767: {
                                        slidesPerView: 2,
                                        },
                                        991: {
                                        slidesPerView: 3,
                                        },
                                        1200: {
                                            slidesPerView: 4,
                                        },
                                    }}
                                    navigation
                                    pagination={{ clickable: true }}
                                    scrollbar={{ draggable: true }}
                                >
                                    {
                                        data.slice(0,7).map((item,index) => (
                                            <SwiperSlide key={index}>
                                                <div className="swiper-container show-shadow carousel auctions">
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide">
                                                            <div className="slider-item">										
                                                        <div className={`sc-card-product ${item.feature ? 'comingsoon' : '' } `}>
                                                        <div className="card-media">
                                                            <img src={item.img} />
                                                            {/*<Link to="/login" className="wishlist-button heart"><span className="number-like">{item.wishlist}</span></Link>*/}
                                                            <div className="coming-soon">{item.feature}</div>
                                                        </div>
                                                        <div className="card-title">
                                                            <h5 className="style2">{item.title}</h5>
                                                            <Link to="#" onClick={() => openInNewTab(item.link)} className="tags">{item.tags}</Link>
                                                        </div>
                                                        <div className="meta-info">
                                                            <div className="author">

                                                            </div>
                                                            <div className="price">
                                                                {/*<span>Current Bid</span>*/}
                                                                <h5> {item.price}</h5>
                                                            </div>
                                                        </div>
                                                        <div className="card-bottom">
                                                            <Link to="#" onClick={() => setModalShow(true)} className="sc-button style bag fl-button pri-3 no-bg"><span>+</span></Link>
                                                            <Link to="#" onClick={() => setModalShow(true)} className="sc-button style bag fl-button pri-3 no-bg"><span>-</span></Link>
                                                        </div>
                                                    </div>   	
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            }
                        </div>
                    </div>
                </div>
            </section>
            <CardModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Fragment>
    );
}

export default TodayPicks;
