import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import About from "../components/About";
import Connect from "../components/Connect";
import HowTheyDo from "../components/HowTheyDo";
import Navbar from "../components/Navbar/Navbar";
import Reviews from "../components/Reviews";
import Showcase from "../components/Showcase";
import Works from "../components/Works";
import "../styles/index.scss";
import "swiper/scss";
import { StaticImage } from "gatsby-plugin-image";
import Footer from "../components/Footer";
import ogImg from "../images/ogImage.png"


const IndexPage = () => {
    useEffect(() => {
        const spinner = document.getElementById("preloaderWrapper");
        if (spinner) {
            setTimeout(() => {
                spinner.style.display = "none";
            }, 5000);
        }
    }, []);

    return (
        <>
            <Helmet title="Pravink Tatoos">
                <meta name="description" content="We aim at customer satisfaction by delivering top class quality service & quality output. Make your body-art experience a positive one and a happy memory one would cherish always" />
                <meta name="image" content={ogImg} />
                <meta property="og:site_name" content="Pravink Tatoos" />
                <meta property="og:title" content="Pravink Tatoos" />
                <meta property="og:url" content="https://pravinktattoos.com" />
                <meta property="og:image" itemprop="image" content={ogImg} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="We aim at customer satisfaction by delivering top class quality service & quality output. Make your body-art experience a positive one and a happy memory one would cherish always" />
            </Helmet>
            <div id="preloaderWrapper">
                <div id="preloader">
                    <StaticImage
                        placeholder="blurred"
                        layout="constrained"
                        src="../images/logoBlack.svg"
                        alt="logo of pravinkTattoos"
                        className="logo"
                    />
                </div>
            </div>
            <Navbar />
            <Showcase />
            <HowTheyDo />
            <Works />
            <Connect />
            <About />
            <Reviews />
            <Footer />
        </>
    );
};

export default IndexPage;
