import React, { ReactElement } from "react";
import "../styles/layout.css"
import Header from "./header"
import Footer from "./footer"

type LayoutProps = Required<{readonly children: ReactElement}>

export const Layout = ({children}: LayoutProps) => {
    return (
        <div className="layout">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
