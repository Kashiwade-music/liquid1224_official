import React from "react";
import "../styles/footer.css"

export default function Footer() {
    return(
        <footer className="footer">
            © {new Date().getFullYear()} 華力発電所
        </footer>
    )
}