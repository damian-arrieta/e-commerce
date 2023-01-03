import React from 'react';
import { useCartContext } from '../context/CartContext';

export default function CartWidget() {

  const {totalProducts} = useCartContext();

  return (
    <>
      <i className='bi bi-cart3'></i>
      <span>{totalProducts() || ''}</span>
    </>
  )
}
