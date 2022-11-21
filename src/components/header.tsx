import React from "react";
import { Link } from "gatsby";
import LOGO_IMG from "../images/header_logo.png"
import "../styles/header.css"

export default function header(){
    return(
        <header>
            <Link to="/">
                <img src={LOGO_IMG} className="logo-image" alt="logo image"></img>
            </Link>
        </header>
    )
}
