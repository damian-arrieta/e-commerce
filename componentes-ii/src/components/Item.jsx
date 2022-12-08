import ItemCount from './ItemCount';
import './item.css';

export const Item = ({info}) => {
  return (
    <>
          <div className="card-group">
            <div className="card">
              <img src={info.image} alt="" className="card-img-top" />
              <div className="card-block">
                <h5 className="card-title">{info.title}</h5>
                <button className="btn btn-dark">VER MAS</button>
              </div>
              <div>
                <ItemCount initial={1} stock={5} />
              </div>
            </div>
          </div>
    </>
  )
}

export default Item;
