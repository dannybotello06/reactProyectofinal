import Slider from "react-slick";
import { useEffect, useState } from "react";

import { getPromotions } from "../../services/promotions/promotions";


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  
  const [promotions, setPromotions] = useState([])
 
  useEffect(()=>{    
        const asyncFunction = getPromotions
        asyncFunction()
          .then(data => setPromotions(data))
  })

  console.log(promotions);
if(promotions.length>0){
  return (
    <Slider {...settings}>
      <div>
      <img  src = {promotions[0].img} alt="Slide 1" />
      </div>
      <div>
      <img  src = {promotions[1].img} alt="Slide 1" />
      </div>
      <div>
      <img  src = {promotions[2].img} alt="Slide 1" />
      </div>
    </Slider>
  );
}
};
export default Carousel;