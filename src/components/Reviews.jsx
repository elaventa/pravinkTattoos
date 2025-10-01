import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Navigation, Pagination } from "swiper";
import { graphql, useStaticQuery } from "gatsby";

const Reviews = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityReview(sort: { fields: _createdAt, order: DESC }){
        nodes {
          id
          reviewer
          comment
        }
      }
    }
  `);

  return (
    <div className="reviews">
      <div className="header">
        <h1 className="title">Hear What Our Clients Have to Say</h1>
        <div className="actions">
          <BsArrowLeft className="icon swiper-button-prev" />
          <BsArrowRight className="icon swiper-button-next" />
        </div>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          200: { slidesPerView: 1 },
          960: { slidesPerView: 2 },
          1450: { slidesPerView: 3 },
        }}
      >
        {data.allSanityReview.nodes.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="reviewWrapper">
              <p className="content">{review.comment}</p>
              <p className="person">- {review.reviewer}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
