import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
  const {products} = props;
  return (
   <div className='cart'>
     {products.map((product) => {
       return (
        <CartItem
          product={product} 
          key={ product.id } 
          onIncreaseQuantity={props.onIncreaseQuantity}
          onDecreaseQuantity={props.onDecreaseQuantity}
          onDeleteProduct={props.onDeleteProduct}
          //  isLoggedIn = {false}
          //  jsx = {<h1>Testing</h1>}
          //  comp = {<Component />}
        />
       )
     })}
   </div>
 );
}

export default Cart;