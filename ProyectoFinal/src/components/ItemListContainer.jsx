import Title from './Title';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

export const ItemListContainer = (props) => {

  const [data, setData] = useState([]);

  const {categoriaId} = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'Productos');

    if (categoriaId) {
      const queryFilter = query(queryCollection, where('category', '==', categoriaId))
      getDocs(queryFilter)
        .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
    } else {
      getDocs(queryCollection)
      .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
    }
  }, [categoriaId]);

  return (
    <>
        <Title greeting={props.texto} />
        <ItemList data={data} />
    </>
  )
}

export default ItemListContainer;