import Item from './Item';

export const ItemList= ({data = []}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap', height:'30%', weight:'30%'}}>

    { data.map(products => <Item key={products.id} info={products} />)}

   </div>
  );
}

export default ItemList;