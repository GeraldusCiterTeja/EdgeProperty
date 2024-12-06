import React from "react";
import Sosial from "./Sosial";
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import FormFooter from "./FormFooter";

function Footer(){
    return(
        <footer>
            <div className="footerAll">
                <Menu1 />
                <Menu2 />
                <FormFooter />
            </div>
            <Sosial />
            <p>&copy; <a href="index.html">2024 EdgeProperty</a></p>
        </footer>
    )
};

export default Footer;