import { useState, useEffect } from "react"

export default function ItemCount({initial, stock, onAdd}) {

    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1);
    };

    const increase = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial]);

    return (
        <>
            <button className="btn btn-dark m-2" disabled={count <= 1} onClick={() => decrease()}>-</button>
            <span>{count}</span>
            <button className="btn btn-dark m-2" disabled={count >= stock} onClick={() => increase()}>+</button>
            <div>
                <button className="btn btn-dark m-2" disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </>
  )
}
