import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHome } from '@fortawesome/free-solid-svg-icons'
import { ShopContext } from './context/shopcontext'


const Header = () => {
  const {cartItems}=useContext(ShopContext);

  return (
    <div className='w-full h-20 bg-blue-950 flex flex-row text-white justify-between'>
      <h4 className='my-auto mx-12'>My Shop</h4>
       <ul className='flex flex-row  space-x-5 mx-16 my-auto'>
         <li ><Link to='./'><FontAwesomeIcon icon={faHome}  /> </Link></li>
         <li><Link to='./Cart'><FontAwesomeIcon icon={faCartShopping} /></Link></li>
         <span className='text-white'> {cartItems.length} </span>
       </ul>
    </div>
  )
}

export default Header