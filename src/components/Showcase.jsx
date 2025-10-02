import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Showcase = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // ensures Swiper only renders on client (Gatsby SSR fix)
  }, []);

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

  if (!isClient) return null; // avoid SSR issues

  return (
    <section className="showcase">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="showcaseSwiper"
      >
        {slides.map((slide, index) => {
          const bgImage = getImage(slide.image.asset);
          return (
            <SwiperSlide key={index}>
              <div className="slideWrapper" style={{ height: "90vh", position: "relative" }}>
                <GatsbyImage
                  image={bgImage}
                  alt={slide.title}
                  className="bg"
                  style={{ height: "90vh" }}
                />

                <div className="content">
                  <motion.h1
                    className="title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    className="actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                  >
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
                  </motion.div>
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
