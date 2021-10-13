import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function Footer() {
    return (
        <div className="footer-body">
            <footer>
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>
                <h4>Call Us</h4>
                <ul className="numbers">
                    <li>
                        <a href="tel:0242788852">024 000 0000</a>
                    </li>
                    <li>
                        <a href="tel:0501313008">054 000 0000</a>
                    </li>
                </ul>

                <h4>Social follows</h4>
                <ul className="social-icon">
                    <li>
                        <a href="https://twitter.com">
                            <i>
                                <AiFillTwitterCircle />
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href="https://facebook.com">
                            <i>
                                <FaFacebook />
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com">
                            <i>
                                <BsLinkedin />
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com">
                            <i>
                                <BsInstagram />
                            </i>
                        </a>
                    </li>
                </ul>
                <p>&copy;2021 Maxxies Cooporation | All Rights Reserved</p>
            </footer>
        </div>
    );
}
export default Footer;
