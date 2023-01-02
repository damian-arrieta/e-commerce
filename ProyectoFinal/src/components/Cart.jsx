import React from 'react';
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {

  const {cart, totalPrice } = useCartContext();

  if(cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to='/'>Ir al catálogo</Link>
      </>
    )
  }

  return (
    <div>Cart</div>
  )
}
