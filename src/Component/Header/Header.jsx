import React, {useState} from "react";
import {  useNavigate } from "react-router-dom";
import './Header.css'
function Header(){
              const navigate = useNavigate();
              const {handleTrue, setTrue} = useState(false);
              function handleClick() {
                            navigate('/form');
                            setTrue(true);
              }
              return (
                            <header>
                                   <div className="header__section">
                                          <h1 className="para">Reading for Kids –⁠ The Fun Way to Learn How to Read </h1>
                                          <p>The programme includes a comprehensive range of structured online reading games and activities that are fun and highly motivating for young kids.</p>
                                          <div className="btn" onClick={handleClick}>get started</div>
                                   </div>
                            </header>
              )
}
export default Header;