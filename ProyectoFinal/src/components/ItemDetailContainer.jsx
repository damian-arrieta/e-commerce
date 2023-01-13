import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { Grid } from '@mui/material';

export const ItemDetailContainer = () => {

  const [data, setData] = useState({});

  const { detalleId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'Productos', detalleId);
    getDoc(queryDoc)
    .then(res => setData({id: res.id, ...res.data()}))
    }, [detalleId]);

return (
  <>
    <Grid
        container
        justifyContent='center'
        padding="40px"
    >
        <ItemDetail data={data} />
    </Grid>
  </>
);
}

export default ItemDetailContainer;