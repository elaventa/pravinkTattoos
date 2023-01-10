import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const AboutTeam = () => {
    return (
        <section className="aboutTeam">
            <div className="contentWrapper">
                <h1 className="title">Our Dedicated Team of Artists</h1>
                <p className="content">
                    At our tattoo studio, we are proud to have a team of highly
                    talented and professional artists. Each of our artists
                    brings their own unique style and expertise to the table,
                    ensuring that we can create a wide range of tattoo designs
                    to meet the needs and preferences of our clients.
                </p>
            </div>
            <div className="image">
                <StaticImage
                    placeholder="blurred"
                    layout="constrained"
                    src="../images/aboutTeam.png"
                    alt="logo of pravinkTattoos"
                    className="img"
                />
            </div>
        </section>
    );
};

export default AboutTeam;
