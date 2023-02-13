import React from "react";
import './Map.css'
function Map(){
    return(
        <div className="map__add">
              <h5>address</h5>
              <p className="para__small">17, Challange Queens way, Birminham, United Kingdom</p>
              <small className="small">Monday - Friday (09:00 AM to 05:00 PM)</small>
              <div className="iframe__div">
              <iframe className="iframe" id="gmap_canvas" src="https://maps.google.com/maps?q=17,%20Challange%20Queens%20way,%20Birminham,%20United%20Kingdom&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

              </div>
             
        </div>
        
    )
}
export default Map;