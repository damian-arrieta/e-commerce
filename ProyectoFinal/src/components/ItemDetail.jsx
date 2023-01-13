import React, {useState} from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

export const ItemDetail = ({data}) => {

  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  }

  return (
    <>
      <Card sx={{ padding: "40px" }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="row"
        >
          <Grid item sm={12} md={6}>
            <CardMedia
              component="img"
              image={data.image}
              alt={data.title}
            />
          </Grid>

          <Grid item sm={12} md={6}>
            <CardContent>
              <Typography variant="h3" color="initial" sx={{ textAlign: "center", padding: "20px" }}>{data.title}</Typography>
              <Typography variant="h6" color="initial" sx={{ textAlign: "center", padding: "20px" }}>{data.description}</Typography>
              <Typography variant="h4" color="initial" sx={{ textAlign: "center" }}>${data.price}</Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              {
                goToCart ?
                  <Link to='/cart' style={{ textDecoration: "none" }}>
                    <Button variant="contained">Terminar compra</Button>
                  </Link> :
                  <ItemCount initial={1} stock={data.quantity} onAdd={onAdd} />
              }
            </CardActions>
            <CardContent>
              <Typography variant="subtitle1" color="initial" sx={{ textAlign: "center" }}>Stock disponible: {data.stock}</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  )
}

export default ItemDetail;