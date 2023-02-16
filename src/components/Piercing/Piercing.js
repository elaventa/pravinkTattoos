import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./Piercing.scss";

const Piercing = () => {
    return (
        <section className="piercingContainer">
            <StaticImage
                placeholder="blurred"
                layout="constrained"
                src="../../images/piercing.png"
                alt="piercing"
                className=""
                quality={95}
                style={{width: '100%'}}
            />

            <div className="right">
                <h1 className="title">
                    Ready for a piercing adventure? Let's get you started now!
                </h1>

                <p className="content">
                    Discover a world of piercing possibilities with our skilled
                    team of professionals, committed to providing a safe,
                    hygienic and personalized piercing experience
                </p>

                <a target="_blank" href="https://palolempiercingshop.com">
                    <button className="btn solid">
                        Visit Website
                        <BsArrowRight className="hidden" />
                    </button>
                </a>
            </div>
        </section>
    );
};

export default Piercing;
