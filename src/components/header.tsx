import { Link } from "gatsby";
import React from "react";
import MediaQuery from "react-responsive"
import Burger from "../components/burger"
import "../styles/header.css"
import LOGO_IMG from "../images/header_logo.png"

export default function Header(){
    return(
        <header className="header">
            <MediaQuery minWidth={650}>
                <div className="header_wrapper">
                    <nav className="nav">
                        <ul>
                            <li><Link to="/about" className="link">About</Link></li>
                            <li><Link to="/works" className="link">Works</Link></li>
                            <li><Link to="/"><img src={LOGO_IMG} className="header_img"></img></Link></li>
                            <li><Link to="/links" className="link">Links</Link></li>
                            <li><Link to="/contact" className="link">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={649}>
                <Burger></Burger>
                <nav className="nav">
                    <ul>
                        <li><Link to="/"><img src={LOGO_IMG} className="header_img_sp"></img></Link></li>
                    </ul>
                </nav>
            </MediaQuery>
        </header>
    )
}