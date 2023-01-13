import React from 'react';
import { useCartContext } from '../context/CartContext';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import Button from '@mui/material/Button';

export default function CartWidget() {

  const {totalProducts} = useCartContext();

  return (
    <>
      <Button variant="outline" color="inherit">
        <Badge badgeContent={totalProducts()} color='info'>
          <ShoppingCartOutlinedIcon />
        </Badge>
      </Button>
    </>
  )
}
