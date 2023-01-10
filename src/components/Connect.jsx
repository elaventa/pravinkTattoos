import connect from "../images/connect.png";

import React from "react";

const Connect = () => {
    return (
        <section class="connect">
            <div class="image">
                <img src={connect} alt="" />
            </div>

            <div class="content">
                <h1 class="title">Connect With us</h1>
                <div class="row">
                    <div class="col">
                        <h2 class="subTitle">Call Us</h2>
                        <p class="subContent">99999 99999</p>
                    </div>

                    <div class="col">
                        <h2 class="subTitle">Mail Us</h2>
                        <p class="subContent">abc@@gmail.com</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <h2 class="subTitle">Locate Us</h2>
                        <p class="subContent">
                            Shop No.1, House No.235/C, <br />
                            Beach Near Sun Moon Guest House, <br />
                            Palolem, Canacona, Goa
                        </p>

                        <button class="btn hollow">
                            Show us on map{" "}
                            <i class="fa-solid fa-arrow-right hidden"></i>
                        </button>
                    </div>
                </div>

                <div class="social">
                    <h3 class="subTitle">Find us on social media</h3>
                    <div class="icons">
                        <a href="">
                            <i class="fa-brands fa-instagram fa-2x"></i>
                        </a>
                        <a href="">
                            <i class="fa-brands fa-twitter fa-2x"></i>
                        </a>
                        <a href="">
                            <i class="fa-brands fa-facebook fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Connect;
