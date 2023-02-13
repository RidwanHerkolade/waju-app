import React from "react";
import './Contact.css'
import { useNavigate } from "react-router-dom";
function Display(){
    const navigate = useNavigate();
    function handleClick(){
        return(
           navigate('/')
        )
    }
   
    return(
        <div className="contact__div">
             <div className="icon__divs">
                 <div className="contact__img">
                    <img src="../images/mess.png"/>
                </div>
  
                    <div className="contact__content">Sent Successfully</div>
                    <button className="disp;ay__btn" onClick={handleClick}>ok</button>
               
             </div>
             
        </div>
    )
}
export default Display;