import React from "react";
import { Link } from "gatsby";
import MediaQuery from "react-responsive"
import Burger from "../components/burger"
import "../styles/header.css"
import LOGO_IMG from "../images/header_logo.png"

export default function Header(){
    return(
        <header className="header">
            <Burger></Burger>
            <div className="header_wrapper">
                <nav className="nav">
                    <ul>
                        <li><Link to="/"><img src={LOGO_IMG} className="header_img"></img></Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}