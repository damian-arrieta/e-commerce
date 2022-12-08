import Title from './Title';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const products = [
  {id: 1, image: 'https://deejaystore.com.ar/1119-large_default/pioneer-cdj-900-nexus.jpg', category:'reproductores', title: 'CDJ 3000'},
  {id: 2, image: 'https://www.pioneerdj.com/-/media/pioneerdj/images/products/mixer/djm-v10/djm-v10-main.png?h=630&w=1200&hash=A1A18D23D7FFEE0597DB7BE1E4D0F9D5', category:'mesa-de-mezcla', title: 'DJM V10'},
  {id: 3, image: 'https://www.pioneerdj.com/-/media/pioneerdj/images/products/headphones/hdj-1000/black/hdj-1000-main.png?h=630&w=1200&hash=673886DC1227C234BA40112634052573', category:'accesorios', title: 'HDJ 1000'},
  {id: 4, image: 'https://www.pioneerdj.com/-/media/pioneerdj/images/products/turntable/plx-500/black/plx-500-k-main.png?h=1170&w=1029&hash=26CAF9CE7200637919918AD03DAF312E', category:'giradiscos', title: 'PLX 500'},
  {id: 5, image: 'https://metrosoundmusic.com/wp-content/uploads/2013/09/Pioneer-RMX-1000-Remix-Station-Performance-DJ-Remixing-Module.png', category:'accesorios', title: 'RMX 1000'}
];

export const ItemListContainer = (props) => {

  const [data, setData] = useState([]);

  const {categoriaId} = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(products)
      },500);
    });

    if (categoriaId) {
      getData.then(res => setData(res.filter(product => product.category === categoriaId)));
    } else {
      getData.then(res => setData(res));
    }
  }, [categoriaId]);

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  }

  return (
    <>
        <Title greeting={props.texto} />
        <ItemList data={data} />
    </>
  )
}

export default ItemListContainer;