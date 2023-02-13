import React from "react";
import './Board.css'
import BoardData from "./BoardData";
import Slider from "react-slick";

function Board(){    

  // CREATING A AUTOPLAY SLIDER USING REACT SLICK
  const autoplay = {
    dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            
          }
        }
      ]

  }

    return(
        <div className="board__div">
             <h6>New released</h6>
           
              <div className="justify">
              <Slider {...autoplay}> 
                    {BoardData.map((data) => {
                      return [
                           
                                <div className="board__img">
                                     <img src={data.img} alt="board.img"/>
                                </div>
                        
                      ]
                         
                      
                    })}
               </Slider>      
              </div>
             
        </div>
    )
}
export default Board;
