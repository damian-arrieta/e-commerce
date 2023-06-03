import Item from './Item';
import { Container, Grid } from '@mui/material';

export const ItemList= ({data = []}) => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ padding: "40px" }}>
            {data.map((products) => {
                return (
                    <Grid item xs={12} sm={6} md={4} key={products.id}>
                        <Item product={products} />
                    </Grid>
                )
            })}
        </Grid>
    </Container>
  </>
  );
}

export default ItemList;