import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Showcase = () => {
    return (
        <section className="showcase">
            <StaticImage
                layout="fixed"
                src="../images/header.png"
                alt="Showcase image"
                style={{width: "100%", height: "90vh"}}
                className="bg"
            />

            <div className="content">
                <h1 className="title">Transform Your Body into a Work of Art</h1>
                <p>
                    Clean and professional tattoos in a safe and sterile studio.
                    Trust us to take care of you and your ink.
                </p>
                <div className="actions">
                    <button className="btn solid">
                        Contact Us 
                        <BsArrowRight className="hidden" />
                    </button>
                    <button className="btn hollow">
                        Locate Us 
                        <BsArrowRight className="hidden" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
