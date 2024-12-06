import React from "react";
import Navbar from "./Navbar";

function Header(){
    return(
        <div className="header">
                <img src="/images/logo.svg" alt="logo"></img>
                <Navbar />
            <div className="header-box">
            </div>
        </div>
    )
}

export default Header;