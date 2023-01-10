import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Team = () => {
    return (
        <section className="teamSection">
            <h1 className="title">Our Team</h1>

            <div className="row">
                <div className="teamCard highlight">
                    <StaticImage
                        placeholder="blurred"
                        layout="constrained"
                        src="../images/team/pravin.png"
                        alt="pravin"
                    />
                    <div className="content">
                        <h2 className="name">Pravin</h2>
                        <p>
                            Experience: <span>12 Years</span>
                        </p>
                        <p>
                            Specialization:
                            <span>
                                Delicate outlines and dot work + hyper realistic
                                black and gray tattoos
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="teamCard">
                    <StaticImage
                        placeholder="blurred"
                        layout="constrained"
                        src="../images/team/vicky.png"
                        alt="Vicky Wale"
                    />
                    <div className="content">
                        <h2 className="name">Vicky Wale</h2>
                        <p>
                            Experience: <span>7 Years</span>
                        </p>
                        <p>
                            Specialization:
                            <span>All rounder</span>
                        </p>
                    </div>
                </div>

                <div className="teamCard">
                    <StaticImage
                        placeholder="blurred"
                        layout="constrained"
                        src="../images/team/rohan.png"
                        alt="Rohan Waghela"
                    />
                    <div className="content">
                        <h2 className="name">Rohan Waghela</h2>
                        <p>
                            Experience: <span>7 Years</span>
                        </p>
                        <p>
                            Specialization:
                            <span>All rounder</span>
                        </p>
                    </div>
                </div>

                <div className="teamCard">
                    <StaticImage
                        placeholder="blurred"
                        layout="constrained"
                        src="../images/team/rutvik.png"
                        alt="Rutvik Khavdiya"
                    />
                    <div className="content">
                        <h2 className="name">Rutvik Khavdiya</h2>
                        <p>
                            Experience: <span>5 Years</span>
                        </p>
                        <p>
                            Specialization:
                            <span>All rounder</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
