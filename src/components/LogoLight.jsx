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
                width={50}
            />
            
            <div className="logoTitleWrapper light">
                <h1 className="logoTitle">Prav Ink</h1>
                <h1 className="logoTitle">Tattoos</h1>
            </div>
        </div>
    );
};

export default LogoLight;
