import React, { ReactElement } from "react";
import "../styles/layout.css"
import Header from "./header";

type LayoutProps = Required<{readonly children: ReactElement}>

export const Layout = ({children}: LayoutProps) => {
    return (
        <div className="layout">
            <Header></Header>
            <main>{children}</main>
        </div>
    )
}
