import React, {useState} from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

export const ItemDetail = ({data}) => {

  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  }

  return (
    <>
        <div className="container m-5">
                <img className="card-img-top" src={data.image} alt="" />
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className='p-3'>
                  {goToCart ? <button className="btn btn-dark m-2"><Link to='/Cart'>Ir al Carrito</Link></button> : <ItemCount initial={1} stock={5} onAdd={onAdd}/>}
                </div>
        </div>
    </>
  )
}

export default ItemDetail;