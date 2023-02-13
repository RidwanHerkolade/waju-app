import React from "react";
import AimData from "./AimData";
import './Aim.css'
function Aim(){
    return (
        <div className="aim__div">
            <h7>Benefit of Blake e-learning</h7>
            <div className="data__grid">
                {AimData.map(data => {
                return [
                    <div className="aim__grid" key={data.id}>
                        
                          <div className="data__img">
                               <img src={data.images}/>
                          </div>
                          <div className="grid__name">{data.name}</div>
                    </div>
                ]
             })}


            </div>

        </div>
    )
}
export default Aim;