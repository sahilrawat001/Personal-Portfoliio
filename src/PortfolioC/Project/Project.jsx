import React from "react";
import Slider from "react-slick";
import "./Project.css"
 import LeftArrow from "../assets/left-arrow.svg"
import RightArrow from "../assets/right-arrow.svg"
 
 

const Project=({title,datas})=> {

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    };
    return (
     <div className="card__container">
   <h1>{title}</h1>
 <Slider {...settings} className="card__container--inner">
          {datas.map((item, index) => {
            return (
              <div
              className="card__container--inner--card"
              key={index}>
                

                <img src={item.url} alt="hero_img" />
              
               


               
              </div>
            );
          })}
        </Slider>
     </div>
       
    );
  }
  export default Project;
 