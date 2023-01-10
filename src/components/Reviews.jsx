import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import {
    BsArrowLeft,
    BsArrowRight,
} from "react-icons/bs";
import { Navigation, Pagination } from "swiper";
import reviews from "../data/reviews.json";
const Reviews = () => {
    const swiper = useSwiper();
    return (
        <div className="reviews">
            <div className="header">
                <h1 className="title">Hear What Our Clients Have to Say</h1>
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
                    960: {
                        slidesPerView: 2,
                    },
                    1450: {
                        slidesPerView: 3,
                    },
                }}
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="reviewWrapper">
                            <p className="content">{review.review}</p>
                            <p className="person">-{review.person}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Reviews;
