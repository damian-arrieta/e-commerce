import React from 'react';
import { useCartContext } from '../context/CartContext';


export default function ItemCart({ product }) {

    const {removeProduct} = useCartContext();

  return (
    <div>
        <img src={product.image} alt={product.title} />
        <div>
            <p>{product.title}</p>
            <p>{product.quantity}</p>
            <p>{product.price}</p>
            <p>Subtotal: {product.quantity * product.price}</p>
            <button onClick={() => removeProduct(product.id)}>eliminar</button>
        </div>
    </div>
  )
}
