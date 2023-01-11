import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const LogoDark = () => {
    return (
        <div className="logoContainer">
            <StaticImage
                placeholder="blurred"
                layout="constrained"
                src="../images/logoBlack.svg"
                alt="logo of pravinkTattoos"
                width={50}
            />
            <div className="logoTitleWrapper dark">
                <h1 className="logoTitle">Prav Ink</h1>
                <h1 className="logoTitle">Tattoos</h1>
            </div>
        </div>
    );
};

export default LogoDark;
