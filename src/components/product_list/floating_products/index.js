
import React from 'react';
import './style.scss';
import  FloatingProduct from '../floating_product'
import Slider from 'react-slick'




const FloatingProducts = (props) =>{

  const settings = {
    dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
 
  };

 return(
  
    <div  >
     <Slider  {...settings} className="floating-product-container">
    {props.floatingProducts.map((floatingProduct) => {
      return <div><FloatingProduct key={floatingProduct.id} floatingProduct={floatingProduct} /></div>
    })}
     </Slider>
  </div>

 )
}

  
export default FloatingProducts;    