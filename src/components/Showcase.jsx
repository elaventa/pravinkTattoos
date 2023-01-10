import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Showcase = () => {
    return (
        <section class="showcase">
            <StaticImage
                layout="fixed"
                src="../images/header.png"
                alt="Showcase image"
                style={{width: "100%", height: "90vh"}}
                className="bg"
            />

            <div class="content">
                <h1 class="title">Transform Your Body into a Work of Art</h1>
                <p>
                    Clean and professional tattoos in a safe and sterile studio.
                    Trust us to take care of you and your ink.
                </p>
                <div class="actions">
                    <button class="btn solid">
                        Contact Us{" "}
                        <i class="fa-solid fa-arrow-right hidden"></i>
                    </button>
                    <button class="btn hollow">
                        Locate Us <i class="fa-solid fa-arrow-right hidden"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
