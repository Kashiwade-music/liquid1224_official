import React from "react";
import { Link } from "gatsby";
import {slide as Menu} from "react-burger-menu";
import "../styles/burger.css"

export default function Burger() {
    return(
        <Menu>
            <Link to="/" className="link">Top</Link>
            <Link to="/about" className="link">About</Link>
            <Link to="/works" className="link">Works</Link>
            <Link to="/links" className="link">Links</Link>
            <Link to="/contact" className="link">Contact</Link>
        </Menu>
    )
}