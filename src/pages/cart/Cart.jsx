import React, { useContext } from 'react'
import { ShopContext } from '../../components/context/shopcontext'
import Product from '../shop/Product';

const Cart = () => {

const {products,cartItems}=useContext (ShopContext);

  return (
    <React.Fragment>
      <div className='grid grid-cols-3 gap-4 mt-10'>
     {
      products.map((p)=>{
         if(cartItems.some((cartitem) => p.id===cartitem.id && cartitem.count>0))
            {return<Product  item={p}/>}
          
                })
      }
      </div>
     
    </React.Fragment>
  )
}

export default Cart

