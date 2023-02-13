import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'
function Footer(){
    return(
        <div>
            <footer>
                <div className="footers">
                     <div className="footer__logo">
                         <img src="../images/logo.png"/>
                     </div>
                     <div className="footer__links">
                         <Link to="/" className="link">Home</Link>
                         <Link to="/" className="link">Group</Link>
                         <Link to="/" className="link">About</Link>
                         <Link to="/contact" className="link">Contact</Link>
                     </div>
                     
                </div>
                 <div className="footer__down">
                          Blake e-learning 2022
                </div>
            </footer>
        </div>
    )
}
export default Footer;