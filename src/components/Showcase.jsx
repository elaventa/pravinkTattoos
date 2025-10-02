import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Showcase = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityShowcase(sort: { _createdAt: DESC }) {
        nodes {
          title
          description
          image {
            asset {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `);

  const slides = data.allSanityShowcase.nodes;

  return (
    <section className="showcase">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="showcaseSwiper"
      >
        {slides.map((slide, index) => {
          const bgImage = getImage(slide.image.asset);
          return (
            <SwiperSlide key={index}>
              <div className="slideWrapper">
                <GatsbyImage
                  image={bgImage}
                  alt={slide.title}
                  className="bg"
                  style={{ height: "90vh" }}
                />
                <div className="content">
                  <h1 className="title">{slide.title}</h1>
                  <p>{slide.description}</p>
                  <div className="actions">
                    <Link to="#contact">
                      <button className="btn solid">
                        Contact Us <BsArrowRight className="hidden" />
                      </button>
                    </Link>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://goo.gl/maps/2qoAQDcxfps4hM4H8"
                    >
                      <button className="btn hollow">
                        Locate Us <BsArrowRight className="hidden" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Showcase;
