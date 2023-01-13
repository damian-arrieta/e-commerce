import React from 'react';
import { useCartContext } from '../context/CartContext';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'


export default function ItemCart({ product }) {

    const {removeProduct} = useCartContext();

  return (
    <Card sx={{padding:"20px" , marginBottom:"20px"}}>

      <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
      >

        <Grid item>
            <CardMedia
                component="img"
                image={product.image}
                height="200"
            />
        </Grid>

        <Grid item>
            <CardContent>
                <Typography variant="h5" color="initial">{product.title}</Typography>
                <Typography variant="body1" color="initial">Cantidad: {product.quantity}</Typography>
                <Typography variant="body1" color="initial">Precio Unitario: ${product.price}</Typography>
                <Typography variant="body1" color="initial">Subtotal: ${product.quantity * product.price}</Typography>
            </CardContent>
        </Grid>

        <Grid item>
            <CardActions>
                <Button variant='contained' onClick={() => removeProduct(product.id)}>Eliminar</Button>
            </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}
