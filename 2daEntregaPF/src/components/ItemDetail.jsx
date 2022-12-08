import React from 'react'

export const ItemDetail = ({data}) => {
  return (
    <>
        <div className="container m-5">
            <div className="card">
                <img className="card-img-top" src={data.image} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a href="#" className="btn btn-dark">Comprar</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default ItemDetail;