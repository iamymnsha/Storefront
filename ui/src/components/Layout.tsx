import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type layoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: layoutProps) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;