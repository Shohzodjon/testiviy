import img from "../assets/images/imge.png";
import client from "../assets/images/client.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";
import client4 from "../assets/images/client4.png";
import client5 from "../assets/images/client5.png";
import client6 from "../assets/images/client6.png";
import client7 from "../assets/images/client7.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../assets/styles/home-page.css";
const HomePage = () => {
  const imageArr = [
    client,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
  ];
  return (
    <section className="home__page">
      <div className="container">
        <div className="home__page__flex">
          <div className="flex__left__side">
            <h1>
              Lessons and insights from <span>8 years</span>
            </h1>
            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
          </div>
          <div className="flex__right__side">
            <img src={img} alt="img" />
          </div>
        </div>
      </div>
      <div className="client__section">
        <div className="container">
          <h3>Our Clients</h3>
          <p>We have been working with some Fortune 500+ clients</p>
          <Swiper
            spaceBetween={10}
            slidesPerView={5}
            loop={true}
            modules={[Autoplay]}
          >
            {imageArr.map((img, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="client__card">
                    <img src={img} alt="img" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default HomePage;
