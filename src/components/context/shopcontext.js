import { createContext, useState } from "react";

export const ShopContext=createContext(null);
export const ShopContextProvider =(props)=>
{
    const [products, setProducts] = useState([]);
    const [cartItems,setcartItems]=useState([]);

    const addtoCart=(itemId)=>
    {
        if(!cartItems?.find((item)=>itemId===item.id))
        setcartItems([...cartItems,{id:itemId,count:1}]);
        else 
        setcartItems(cartItems.map((item)=>{
        if(item.id===itemId)return {...item,count: item.count+1};
        else return item;}))
    }
        
    

    const removeFromCart=(itemId)=>
    {
        setcartItems(cartItems.map((i)=>{
           if (itemId===i.id && i.count > 0)  return {...i,count:i.count-1} ;
           else return i;
        }))
    }

    const contextValue={products,setProducts,cartItems,addtoCart,removeFromCart}

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}