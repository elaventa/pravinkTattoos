import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const LogoLight = () => {
    return (
        <div className="logoContainer">
            <StaticImage
                placeholder="blurred"
                layout="constrained"
                src="../images/logoWhite.svg"
                alt="logo of pravinkTattoos"
                width={60}
            />
            
            <div className="logoTitleWrapper light">
            <h1 className="logoTitle">PRAV INK</h1>
                <h1 className="logoTitle">TATTOOS</h1>
            </div>
        </div>
    );
};

export default LogoLight;
