
import Products from '../product_list/products';
import  FloatingProducts  from "../product_list/floating_products"
import AllProducts from '../all_products/index'
import { products, floatingProducts, allProducts}  from '../product_items';







const Home = () =>{

    return(
        <>
            <Products products = {products}>
             {/* <FloatingProducts floatingProducts = {floatingProducts}/> */}
             </Products>
             
        </>
    )
}




export default Home;