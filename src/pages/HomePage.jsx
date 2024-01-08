import img from '../assets/images/imge.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const HomePage = () => {
    return (
        <section className="home__page">
            <div className="container">

                <div className="home__page__flex">
                    <div className="flex__left__side">
                        <h1>Lessons and insights from <span>8 years</span></h1>
                        <p>Where to grow your business as a photographer: site or social media?</p>
                    </div>
                    <div className="flex__right__side">
                        <img src={img} alt="img" />
                    </div>
                </div>
            </div>
            <div className='client__section'>
                <div className='container'>
                    <h3>Our Clients</h3>
                    <p>We have been working with some Fortune 500+ clients</p>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </section>
    )
}
export default HomePage;