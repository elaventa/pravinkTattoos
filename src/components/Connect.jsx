
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
        <section className="connect">
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
                        <p className="subContent">99999 99999</p>
                    </div>

                    <div className="col">
                        <h2 className="subTitle">Mail Us</h2>
                        <p className="subContent">abc@@gmail.com</p>
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

                        <button className="btn hollow">
                            Show us on map
                            <BsArrowRight className="hidden" />
                        </button>
                    </div>
                </div>

                <div className="social">
                    <h3 className="subTitle">Find us on social media</h3>
                    <div className="icons">
                        <a href="">
                            <BsInstagram style={{ fontSize: 25 }} />
                        </a>
                        <a href="">
                            <BsTwitter style={{ fontSize: 25 }} />
                        </a>
                        <a href="">
                            <BsFacebook style={{ fontSize: 25 }} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Connect;
