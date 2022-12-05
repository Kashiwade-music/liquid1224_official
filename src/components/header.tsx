import { Link } from "gatsby";
import React from "react";
import "../styles/header.css"
import LOGO_IMG from "../images/header_logo.png"

export default function Header(){
    return(
        <header className="header">
            <nav className="nav">
                <ul>
                    <li><Link to="/about" className="link">About</Link></li>
                    <li><Link to="/works" className="link">Works</Link></li>
                    <li className="header_img_link"><Link to="/"><img src={LOGO_IMG} className="header_img"></img></Link></li>
                    <li><Link to="/links" className="link">Links</Link></li>
                    <li><Link to="/contact" className="link">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}