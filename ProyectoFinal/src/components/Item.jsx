import './item.css';
import { Link } from 'react-router-dom';

export const Item = ({info}) => {

  return (
    <>
          <div className="card-group text-center">
            <div className="card mb-3">
              <img src={info.image} alt="" className="card-img-top m-auto" />
              <div className="card-block p-3">
                <h5 className="card-title">{info.title}</h5>
                <Link to={`/detalle/${info.id}`} className="btn btn-dark">VER MAS</Link>
              </div>
            </div>
          </div>
    </>
  )
}

export default Item;
