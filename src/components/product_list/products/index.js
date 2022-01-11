import { Product } from "../product";
import { Row, Button} from "react-bootstrap";
// import { allProducts } from "../../product_items";
// import AllProducts from "../../all_products";




const Products = (props) => {
  return (
    <>
      <Row>
        {props.products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </Row>
      <Row>
     
      <div>
          {props.children}
       </div>
       </Row>
       {/* <div style={{visibility: 'hidden'}}> <AllProducts allProducts= {allProducts}/></div> */}
    </>
  );
};

export default Products;  
