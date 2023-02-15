import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import "./ReachUs.scss";
import { useForm, ValidationError } from "@formspree/react";
import { BsArrowRight, BsInstagram, BsWhatsapp } from "react-icons/bs";

const ReachUs = () => {
    const [state, handleSubmit] = useForm("mnqyplkq");
    if (state.succeeded) {
        return <p>Thanks for Contacting Us!</p>;
    }
    return (
        <section id="contact" className="section reachUsContainer">
            <div className="left">
                <div className="row">
                    <h2 className="subtitle">Email</h2>
                    <a href="mailto:pravinkhavadiya@gmail.com">
                        pravinkhavadiya@gmail.com
                    </a>
                </div>

                <div className="row">
                    <h2 className="subtitle">Phone</h2>
                    <a href="tel:+919921209571">+91 99212 09571</a>
                </div>

                <div className="row">
                    <h2 className="subtitle">Social</h2>
                    <div className="icons">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://instagram.com/prav_ink_tattoos"
                        >
                            <BsInstagram style={{ fontSize: 25 }} />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://wa.me/+919921209571"
                        >
                            <BsWhatsapp style={{ fontSize: 25 }} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="right">
                <h1 className="title">Reach out to us</h1>
                <p className="content">
                    We are here to help! Our dedicated team is ready to provide
                    you with the support you need.
                </p>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="name" />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />
                    <input type="email" placeholder="Email" name="email" />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <textarea
                        cols="30"
                        rows="10"
                        placeholder="Enter your message"
                        name="message"
                    ></textarea>
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button disabled={state.submitting} className="btn hollow">
                        Submit
                        <BsArrowRight className="hidden" />
                    </button>
                    
                </form>
            </div>
        </section>
    );
};

export default ReachUs;
