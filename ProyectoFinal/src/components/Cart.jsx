import React from 'react';
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import { Button, Grid, Typography } from '@mui/material';

export default function Cart() {

  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <Grid
          container
          direction='column'
          alignItems='center'
          padding='40px'
          spacing={5}
          sx={{height:"100vh"}}
        >

          <Grid item>
            <Typography variant='h3' color='initial' sx={{ textAlign: "center" }}>No hay elementos en el carrito</Typography>
          </Grid>

          <Grid item>
            <Link to={`/`} style={{ textDecoration: "none" }} >
              <Button variant='contained'>Hacer compras</Button>
            </Link>
          </Grid>

        </Grid>
      </>
    )
  }

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justifyContent="center"
        spacing={5}
        padding="40px"
        sx={{ overflow: "auto", height:"100vh" }}
      >

        <Grid item>
          {
            cart.map(product => <ItemCart key={product.id} product={product} />)
          }
        </Grid>

        <Grid
          item
          marginTop={5}
        >
          <Typography variant='h4' color='initial'>Total: ${totalPrice}</Typography>
          <Link to='/checkout' style={{ textDecoration: "none" }}>
          <Button variant='contained'>Checkout</Button>
          </Link>

          
        </Grid>

      </Grid>
    </>
  )
}
