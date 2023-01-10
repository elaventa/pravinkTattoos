import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { BsArrowLeft, BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { Navigation, Pagination } from "swiper";
import { StaticImage } from "gatsby-plugin-image";

const Works = () => {
    const swiper = useSwiper();
    return (
        <div className="recentWorks">
            <div className="header">
                <h1 className="title">Our Recent Works</h1>
                <div className="actions">
                    <BsArrowLeft
                        id="swiper-back"
                        onClick={() => swiper?.slidePrev()}
                        className="icon"
                    />
                    <BsArrowRight
                        id="swiper-forward"
                        onClick={() => swiper?.slideNext()}
                        className="icon"
                    />
                </div>
            </div>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="swiper"
                modules={[Navigation, Pagination]}
                navigation={{
                    nextEl: "#swiper-forward",
                    prevEl: "#swiper-back",
                }}
                breakpoints={{
                    200: {
                        slidesPerView: 1,
                    },
                    470: {
                        width: 768,
                        slidesPerView: 2,
                    },
                }}
            >
                <SwiperSlide>
                    <StaticImage
                        placeholder="blurred"
                        layout="constrained"
                        src="../images/works/1.png"
                        alt="work 1"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <StaticImage
                        placeholder="blurred"
                        layout="constrained"
                        src="../images/works/2.png"
                        alt="work 1"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <StaticImage
                        placeholder="blurred"
                        layout="constrained"
                        src="../images/works/3.png"
                        alt="work 1"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <StaticImage
                        placeholder="blurred"
                        layout="constrained"
                        src="../images/works/4.jpg"
                        alt="work 4"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <StaticImage
                        placeholder="blurred"
                        layout="constrained"
                        src="../images/works/5.jpg"
                        alt="work 4"
                    />
                </SwiperSlide>

               
            </Swiper>

            <div className="findUs">
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/prav_ink_tattoos/">
                    <p>Find us on Instagram</p>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/prav_ink_tattoos/">
                    <BsArrowUpRight className="icon" />
                </a>
            </div>
        </div>
    );
};

export default Works;
