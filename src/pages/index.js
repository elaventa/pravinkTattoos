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
import "../styles/index.css";
import "swiper/scss";
import { StaticImage } from "gatsby-plugin-image";
import Footer from "../components/Footer";

const IndexPage = () => {
    useEffect(() => {
        const spinner = document.getElementById("preloaderWrapper");
        if (spinner) {
            setTimeout(() => {
                spinner.style.display = "none";
            }, 6000);
        }
    }, []);

    return (
        <>
            <Helmet title="Pravink Tatoos">
                <meta name="description" content="Pravink Tatoos" />
                <meta name="image" content="https://github.com/elaventa/pravinkTattoos/blob/f8292a8a936622f3359f66c9a889ff1e39978c45/src/images/logoBlack.png?raw=true" />
                <meta property="og:site_name" content="Pravink Tatoos" />
                <meta property="og:title" content="Pravink Tatoos" />
                <meta property="og:url" content="https://pravinktattoos.com" />
                <meta property="og:image" itemprop="image" content="https://github.com/elaventa/pravinkTattoos/blob/f8292a8a936622f3359f66c9a889ff1e39978c45/src/images/logoBlack.png?raw=true" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Pravink Tatoos" />
            </Helmet>
            <div id="preloaderWrapper">
                <div id="preloader">
                    <StaticImage
                        placeholder="blurred"
                        layout="constrained"
                        src="../images/logoBlack.png"
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
