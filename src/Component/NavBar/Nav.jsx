import React from "react";
import {Link} from "react-router-dom";
import './Nav.css'

function Nav(){
        return (
               <nav>
                  <div className="nav__div">
                          <div className="nav__logo">
                                <img src="../images/logo.png" alt="img__logo"/> 
                          </div>
                          <div className="nav__links">
                                   <Link to='/' className="link">home</Link>
                                   <Link to='/contact' className="link">Contact</Link>
                          
                          </div>
                  </div>
              </nav>
        )
}
export default Nav;