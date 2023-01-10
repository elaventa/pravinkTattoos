import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { BsArrowUpRight, BsTelephone } from "react-icons/bs";

const Navbar = () => {
    const [clicked, setclicked] = useState(false);
    const handleClick = () => {
        setclicked(!clicked);
    };
    return (
        <nav className={`navbar ${clicked}`}>
            <Link to="/">
                <div className="logo">
                    {clicked ? (
                        <StaticImage
                            placeholder="blurred"
                            layout="constrained"
                            src="../../images/logoWhite.png"
                            alt="logo of pravinkTattoos"
                            width={100}
                        />
                    ) : (
                        <StaticImage
                            placeholder="blurred"
                            layout="constrained"
                            src="../../images/logoBlack.png"
                            alt="logo of pravinkTattoos"
                            width={100}
                        />
                    )}
                </div>
            </Link>
            <ul className={`navItems ${clicked}`}>
                <Link to="/portfolio">
                    <li className="navItem">
                        Portfolio
                        <BsArrowUpRight />
                    </li>
                </Link>
                <Link to="#connect">
                    <li className="navItem">
                        Contact us
                        <BsArrowUpRight />
                    </li>
                </Link>
                <a href="tel:+91999999999">
                    <li className="navItem callBtn">
                        <BsTelephone />
                        Call Now
                    </li>
                </a>
            </ul>

            <div className="mobileNav">
                <div className="call">
                    <BsTelephone className="icon" />
                </div>
                <div onClick={handleClick} className={`hamburger ${clicked}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;