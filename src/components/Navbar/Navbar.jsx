import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { BsArrowUpRight, BsTelephone } from "react-icons/bs";
import LogoDark from "../LogoDark";
import LogoLight from "../LogoLight";

const Navbar = () => {
    const [clicked, setclicked] = useState(false);
    const handleClick = () => {
        setclicked(!clicked);
    };
    return (
        <nav className={`navbar ${clicked}`}>
            <Link to="/">
                <div>
                    {clicked ? (
                        <LogoLight />
                    ) : (
                       <LogoDark />
                    )}
                </div>
            </Link>
            <ul className={`navItems ${clicked}`}>
                <Link onClick={() => setclicked(false)} to="/portfolio">
                    <li className="navItem">
                        Portfolio
                        <BsArrowUpRight />
                    </li>
                </Link>
                <Link onClick={() => setclicked(false)} to="#contact">
                    <li className="navItem">
                        Contact us
                        <BsArrowUpRight />
                    </li>
                </Link>
                <a href="tel:+919921209571">
                    <li className="navItem callBtn">
                        <BsTelephone />
                        Call Now
                    </li>
                </a>
            </ul>

            <div className="mobileNav">
                <a style={{color: "#000"}} href="tel:+919921209571">
                    <div className="call">
                        <BsTelephone className="icon" />
                    </div>
                </a>
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
