import {  useEffect, useContext} from 'react';
import { ShopContext } from '../../components/context/shopcontext'
import Product from './Product';



const Products = () => {
  
  const {products,setProducts}=useContext (ShopContext);
  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, [setProducts]);


  return (
    <div className='grid grid-cols-4 gap-4 mt-10'>
      {
      products.map((prod , index) =>{
        return (
          <Product key={index} item={prod}/>
      )})}
    </div>
  );
};
export default Products;