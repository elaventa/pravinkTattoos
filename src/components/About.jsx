import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const About = () => {
    return (
        <section className="about">
            <div className="contentWrapper">
                <h1 className="title">
                    A Safe and Comfortable Space for Women's Tattooing Needs
                </h1>
                <p className="content">
                    Our tattoo studio is a safe and comfortable space for
                    women's tattooing needs. We follow strict hygienic protocols
                    and use single-use needles to ensure a hygienic experience.
                    Our team is dedicated to providing an inclusive and
                    professional atmosphere for all clients, and we respect
                    boundaries throughout the tattooing process.
                </p>
            </div>
            <div className="image">
                <StaticImage
                    placeholder="blurred"
                    layout="constrained"
                    src="../images/asset.png"
                    alt="About image"
                    width={1500}
                />
            </div>
        </section>
    );
};

export default About;
