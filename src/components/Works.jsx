import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { BsArrowLeft, BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { Navigation, Pagination } from "swiper";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Works = () => {
    const swiper = useSwiper();

    // Fetch data from Sanity
    const data = useStaticQuery(graphql`
        query {
            allSanityGalleryImage(sort: { fields: _createdAt, order: DESC }) {
            nodes {
                id
                image {
                    asset {
                    gatsbyImageData(width: 400, placeholder: BLURRED)
                    }
                }
                }
            }
        }
    `);

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
                {data.allSanityGalleryImage.nodes.map((img) => (
                    <SwiperSlide key={img.title}>
                        <GatsbyImage
                            image={getImage(img.image.asset)}
                            alt={img.title}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="findUs">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://instagram.com/pravinktattoos"
                >
                    <p>Find us on Instagram</p>
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://instagram.com/pravinktattoos"
                >
                    <BsArrowUpRight className="icon" />
                </a>
            </div>
        </div>
    );
};

export default Works;
