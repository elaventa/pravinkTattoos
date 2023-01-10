import React from "react";
import { Helmet } from "react-helmet";
import About from "../components/About";
import AboutTeam from "../components/AboutTeam";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import Team from "../components/Team";
import "../styles/index.scss";

const PortfolioPage = () => {
    return (
        <>
            <Helmet title="Pravink Tatoos">
                <meta name="description" content="We aim at customer satisfaction by delivering top class quality service & quality output. Make your body-art experience a positive one and a happy memory one would cherish always" />
                <meta name="image" content="https://github.com/elaventa/pravinkTattoos/blob/d8f2b1f2217729d05d8732dba3ccf9708cfcc404/src/images/ogImage.png?raw=true" />
                <meta property="og:site_name" content="Pravink Tatoos" />
                <meta property="og:title" content="Pravink Tatoos" />
                <meta property="og:url" content="https://pravinktattoos.com" />
                <meta property="og:image" itemprop="image" content="https://github.com/elaventa/pravinkTattoos/blob/d8f2b1f2217729d05d8732dba3ccf9708cfcc404/src/images/ogImage.png?raw=true" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="We aim at customer satisfaction by delivering top class quality service & quality output. Make your body-art experience a positive one and a happy memory one would cherish always" />
            </Helmet>
            <Navbar />
            <AboutTeam />
            <Team />
            <About />
            <Footer />
        </>
    );
};

export default PortfolioPage;
