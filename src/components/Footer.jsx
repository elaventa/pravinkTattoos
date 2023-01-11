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
        <footer id="contact" className="footer">
            <div className="col">
                <StaticImage
                    placeholder="blurred"
                    layout="constrained"
                    src="../images/logoWhite.svg"
                    alt="logo of pravinkTattoos"
                />
            </div>
            <div className="col">
                <h1 className="title">Contact US</h1>
                <a href="tel:+919921209571">
                    <p className="content">
                        <IoCallOutline className="icon" />
                        +91 99212 09571
                    </p>
                </a>
                <a href="mailto:pravinkhavadiya@gmail.com">
                    <p className="content">
                        <IoMailOutline className="icon" />
                        pravinkhavadiya@gmail.com
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

                <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/2qoAQDcxfps4hM4H8">
                    <button className="btn hollow">
                        Show us on map
                        <BsArrowRight className="hidden" />
                    </button>
                </a>
            </div>

            <div className="col">
                <h3 className="title">Find us on social media</h3>
                <div className="icons">
                    <a
                        target="_blank" rel="noreferrer"
                        href="https://instagram.com/prav_ink_tattoos"
                    >
                        <BsInstagram style={{ fontSize: 25 }} />
                    </a>
                    {/* <a target="_blank"  rel="noreferrer" href="https://instagram.com/prav_ink_tattoos">
                        <BsTwitter style={{ fontSize: 25 }} />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://instagram.com/prav_ink_tattoos">
                        <BsFacebook style={{ fontSize: 25 }} />
                    </a> */}
                </div>
            </div>

            {/* <div className="credits">
                <p>All Rights Reserved</p>
                <p>
                    Designed and Developed by{" "}
                    <a
                        style={{ textDecoration: "underline" }}
                        target="_blank" rel="noreferrer"
                        href="https://perple.in"
                    >
                        Perple
                    </a>
                </p>
            </div> */}
        </footer>
    );
};

export default Footer;
