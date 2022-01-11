import React from 'react';
import { CardImg, Col} from "reactstrap";
import './style.scss';




const FloatingProduct = ({ floatingProduct } ) =>{


 return(
   <div className="floating-product" >
   <Col sm='12'>
     <div className = "floating-card" title={floatingProduct.title}>
      <CardImg  className="floating-img"  src={floatingProduct.img}/>
      </div>
    </Col>
    </div>
 )
}

  
export default FloatingProduct;


