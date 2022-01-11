import React from 'react';
import { SingleProduct } from '../all_products/single_product/index'
import { Row} from "react-bootstrap";





const AllProducts = (props) =>{
    return(
            <Row className="p-5 bg-info">
                {props.allProducts.map((singleProduct) => {
                return <SingleProduct key={singleProduct.id} singleProduct={singleProduct}/>
                }
                )}
        </Row>
      
    )
}

export default AllProducts;