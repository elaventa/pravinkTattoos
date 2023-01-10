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
        <section>
            <Helmet title="Pravink Tatoos">
                {/* <meta name="description" content="Destination for all your engineering needs, One stop shop for all engineering solutions | Newpoint Electromechanical Equipment Installation and Maintenance" />
                <meta name="image" content="https://github.com/elaventa/newpointuae/blob/577f20ffcd334cf127a94a44f0379a80ef5fe8f6/src/assets/og-image.png?raw=true" />
                <meta property="og:site_name" content="Newpoint Electromechanical Equipment Installation and Maintenance " />
                <meta property="og:title" content="Newpoint Electromechanical Equipment Installation and Maintenance" />
                <meta property="og:url" content="https://newpointuae.com" />
                <meta property="og:image" itemprop="image" content="https://github.com/elaventa/newpointuae/blob/577f20ffcd334cf127a94a44f0379a80ef5fe8f6/src/assets/og-image.png?raw=true" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Destination for all your engineering needs, One stop shop for all engineering solutions | Newpoint Electromechanical Equipment Installation and Maintenance" /> */}
            </Helmet>
            <div id="preloaderWrapper">
                <div id="preloader">
                    <StaticImage
                        placeholder="blurred"
                        layout="constrained"
                        src="../images/logoBlack.png"
                        alt="logo of pravinkTattoos"
                        class="logo"
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
        </section>
    );
};

export default IndexPage;
