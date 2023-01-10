import React from "react";
import {
    BsArrowRight,
    BsFacebook,
    BsInstagram,
    BsTwitter,
} from "react-icons/bs";
import { StaticImage } from "gatsby-plugin-image";

const Connect = () => {
    return (
        <section id="connect" className="connect">
            <div className="image">
                <StaticImage
                    placeholder="blurred"
                    layout="constrained"
                    src="../images/connect.png"
                    alt="logo of pravinkTattoos"
                    className="logo"
                />
            </div>

            <div className="content">
                <h1 className="title">Connect With us</h1>
                <div className="row">
                    <div className="col">
                        <h2 className="subTitle">Call Us</h2>
                        <a href="tel:+919921209571">
                            <p className="subContent">+91 99212 09571</p>
                        </a>
                    </div>

                    <div className="col">
                        <h2 className="subTitle">Mail Us</h2>
                        <a href="mailto:pravinkhavadiya@gmail.com">
                            <p className="subContent">
                                pravinkhavadiya@gmail.com
                            </p>
                        </a>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h2 className="subTitle">Locate Us</h2>
                        <p className="subContent">
                            Shop No.1, House No.235/C, <br />
                            Beach Near Sun Moon Guest House, <br />
                            Palolem, Canacona, Goa
                        </p>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://goo.gl/maps/2qoAQDcxfps4hM4H8"
                        >
                            <button className="btn hollow">
                                Show us on map
                                <BsArrowRight className="hidden" />
                            </button>
                        </a>
                    </div>
                </div>

                <div className="social">
                    <h3 className="subTitle">Find us on social media</h3>
                    <div className="icons">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://instagram.com/prav_ink_tattoos"
                        >
                            <BsInstagram style={{ fontSize: 25 }} />
                        </a>
                        {/* <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://instagram.com/prav_ink_tattoos"
                        >
                            <BsTwitter style={{ fontSize: 25 }} />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://instagram.com/prav_ink_tattoos"
                        >
                            <BsFacebook style={{ fontSize: 25 }} />
                        </a> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Connect;
