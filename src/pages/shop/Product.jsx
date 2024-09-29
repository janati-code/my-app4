import React, { useContext } from 'react'
import { ShopContext } from '../../components/context/shopcontext';

const Product = (props) => {

  const {id, title, image, price } = props.item;
  const {cartItems,addtoCart,removeFromCart}=useContext(ShopContext);

  const isInCart=(cartItems?.some((item) => { return item.id===id}));

  return (
    <div  className='bg-white border hover:border-r-8 text-black flex 
        p-10 flex-col justify-between space-y-5 items-center rounded-xl transition 
        ease-in-out delay-120 hover:scale-110 '>
      <img src={image} alt={title} width={128} height={128} />
      <h2>{title}</h2>
      <p>Price: {price} $</p>
      <div className='flex flex-row'>
        <button className='w-6 h-6 bg-blue-400  font-bold  rounded-md' onClick={()=>{addtoCart(id)}} >+</button>

        <p className='mx-2'>{cartItems?.filter((row)=>row.id === id)[0]?.count}</p>

        {(isInCart &&
              <button className='w-6 h-6 bg-blue-400 font-bold  rounded-md' onClick={()=>{removeFromCart(id)}}>-</button>)}
      </div>

    </div>
  )
}

export default Product