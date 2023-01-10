import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import {
    BsArrowRight,
    BsFacebook,
    BsInstagram,
    BsTwitter,
} from "react-icons/bs";

import { IoCallOutline, IoMailOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="col">
                <StaticImage
                    placeholder="blurred"
                    layout="constrained"
                    src="../images/logoWhite.png"
                    alt="logo of pravinkTattoos"
                />
            </div>

            <div className="col">
                <h1 className="title">Contact US</h1>
                <a href="tel:+919999999999">
                    <p className="content">
                        <IoCallOutline className="icon" />
                        9999999999
                    </p>
                </a>
                <a href="mailto:abc@gmail.com">
                    <p className="content">
                        <IoMailOutline className="icon" />
                        abc@gmail.com
                    </p>
                </a>
            </div>

            <div className="col">
                <h2 className="title">Locate Us</h2>
                <p className="content">
                    Shop No.1, House No.235/C, <br />
                    Beach Near Sun Moon Guest House, <br />
                    Palolem, Canacona, Goa
                </p>

                <button className="btn hollow">
                    Show us on map
                    <BsArrowRight className="hidden" />
                </button>
            </div>

            <div className="col">
                <h3 className="title">Find us on social media</h3>
                <div className="icons">
                    <a target="_blank" href="">
                        <BsInstagram style={{ fontSize: 25 }} />
                    </a>
                    <a target="_blank" href="">
                        <BsTwitter style={{ fontSize: 25 }} />
                    </a>
                    <a target="_blank" href="">
                        <BsFacebook style={{ fontSize: 25 }} />
                    </a>
                </div>
            </div>

            <div className="credits">
                <p>All Rights Reserved</p>
                <p>Designed and Developed by <a style={{textDecoration: "underline"}} target="_blank" href="https://perple.in">Perple</a></p>
            </div>
        </footer>
    );
};

export default Footer;
