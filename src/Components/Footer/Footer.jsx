import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo2 from "../../assets/CES-logo copy.png";
import {
    BsInstagram
} from "react-icons/bs";
import {
    BsFacebook
} from "react-icons/bs";
import {
    BsYoutube
} from "react-icons/bs";
import {
    BsLinkedin
} from "react-icons/bs";

import {
    MdLocationOn,
    MdLocalPhone,
    MdOutlineEmail
} from "react-icons/md";
let date = new Date().getFullYear();

const footerData = [
    {
        title: "Address",
        text: "Mahatma Gandhi Avenue, A-Zone, Durgapur, West Bengal Durgapur: 713209",
        icon: <MdLocationOn className="footer_detail-icon" />,
    },
    {
        title: "Phone",
        text: "+91 8004634929",
        name: "(Kartikey Shukla)",
        icon: <MdLocalPhone className="footer_detail-icon" />,
    },
    {
        title: "Email",
        text: "ces.nitdgp1960@gmail.com",
        icon: <MdOutlineEmail className="footer_detail-icon" />,
    },
];


export default function footer() {
    return (
        <div className="footer" id="footer">
            <div className="footer-container">
                <div className="footer_item">
                    <img src={logo2} className="footer_logo" alt="CSS" />
                    <h2 className="footer_heading">Civil Engineering Society</h2>
                    <p className="footer_text">
                        Aims to build a strong feeling of community among CES students, hold engaging events, and serve as a link between students and alumni.
                    </p>
                    <div className="footer_socials">
                        <a href="https://www.instagram.com/ces_nitdgp/">
                            <BsInstagram className="footer_icon" />
                        </a>
                        <a href="https://www.facebook.com/ces.nitdgp/?locale=hi_IN&_rdr">
                            <BsFacebook className="footer_icon" />
                        </a>
                        <a href="https://www.youtube.com/@CESocietyOfficial">
                            <BsYoutube className="footer_icon" />
                        </a>
                        <a href="https://www.linkedin.com/company/civil-engineering-society-ces-nit-durgapur/">
                            <BsLinkedin className="footer_icon" />
                        </a>
                    </div>
                </div>
                <div className="footer_item">
                    <h2 className="footer_title">Quick Links</h2>
                    <ul className="footer_links">
                        <li className="footer_link">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="footer_link">
                            <Link to="/">Events</Link>
                        </li>
                        <li className="footer_link">
                            <Link to="/announcements">Announcements</Link>
                        </li>
                        <li className="footer_link">
                            <Link to="/gallery">Gallery</Link>
                        </li>
                        <li className="footer_link">
                            <Link to="/merchandise">Merchandise</Link>
                        </li>
                        <li className="footer_link">
                            <Link to="/team">Team</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer_item">
                    <h2 className="footer_title">Contact Details</h2>
                    <ul className="footer-details">
                        {footerData.map((item, index) => (
                            <li key={index} className="footer-detail">
                                <div className="footer-detail-icon">{item.icon}</div>
                                <div className="footer_detail_container">
                                    <h3 className="footer-detail-title">{item.title}</h3>
                                    <p className="footer-detail-text">{item.text}</p>
                                    {item.name && (
                                        <p className="footer-detail-text -mt-[1rem]">{item.name}</p>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="footer-copyright">
                <p className="footer-text">
                    ©{date} Civil Engineering Society', NIT Durgapur. All rights reserved.
                </p>
            </div>
        </div>
    );
}
