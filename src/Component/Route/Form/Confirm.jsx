import React from "react";
import './Form.css'

function Confirm(){
    return(
          <div className="confirm">
                 <div className="confirm__div">
                      <h3>application received</h3>
                      <p className="para__div">Your application has been received, please check your email for further instructions</p>
                      <button className="btn__ok">ok</button>
                 </div>
          </div>
    )
}
export default Confirm;