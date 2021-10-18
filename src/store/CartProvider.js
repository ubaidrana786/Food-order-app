import React from 'react'
import CartContex from './cart-contex'

 const CartProvider = (props) => {
    return (
      <CartContex.Provider>
          {props.children}
      </CartContex.Provider> 
    )
}


export default CartProvider