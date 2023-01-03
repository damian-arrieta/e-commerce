import React from 'react';
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';

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
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <p>
        Total: ${totalPrice()}
      </p>
    </>
  )
}
