import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { addDoc, collection, doc, getFirestore, increment, updateDoc } from 'firebase/firestore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { Container } from '@mui/system';

export default function Form() {
    const { cart, totalPrice, clearCart } = useCartContext();
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [mail, setMail] = useState("");
    const [direccion, setDireccion] = useState("");
    const [tel, setTel] = useState("");

    const [errorNombre, setErrorNombre] = useState(false);
    const [leyendaNombre, setLeyendaNombre] = useState("");

    const [errorApellido, setErrorApellido] = useState(false);
    const [leyendaApellido, setLeyendaApellido] = useState("");

    const [errorMail, setErrorMail] = useState(false);
    const [leyendaMail, setLeyendaMail] = useState("");

    const [errorDireccion, setErrorDireccion] = useState(false);
    const [leyendaDireccion, setLeyendaDireccion] = useState("");

    const [errorTel, setErrorTel] = useState(false);
    const [leyendaTel, setLeyendaTel] = useState("");

    const [terminoPedido, setTerminoPedido] = useState(false);
    const [disableButton, setDisableButton] = useState(false);

    const [codigoPedido , setCodigoPedido] = useState("");

    function validateEmail(email) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(email) == false) {
            return false;
        }
        return true;
    }

    const handleClickHacerPedido = () => {
        setTerminoPedido(false);

        const pedido = {
            buyer: { nombre, apellido, mail, direccion, tel },
            items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, stock: product.stock })),
            total: totalPrice,
        };

        const db = getFirestore();
        const pedidosColeccion = collection(db, "pedidos");
        if (cart.length == 0) {
            return
        }
        if (nombre.length < 3) {
            setErrorNombre(true);
            setLeyendaNombre("El nombre debe tener al menos 3 caracteres");
            return
        }
        if (apellido.length < 3) {
            setErrorDireccion(true);
            setLeyendaDireccion("El apellido debe tener al menos 3 caracteres");
            return
        }
        if (validateEmail(mail) == false) {
            setErrorMail(true);
            setLeyendaMail("Mail no valido. Ej: mail@gmail.com");
            return
        }
        if (direccion.length < 5) {
            setErrorDireccion(true);
            setLeyendaDireccion("La direccion debe tener al menos 5 caracteres");
            return
        }
        if (tel.length < 8) {
            setErrorTel(true);
            setLeyendaTel("El telefono de tener 8 digitos");
            return
        }
        setDisableButton(true);

        addDoc(pedidosColeccion, pedido)
            .then(({ id }) => {
                setCodigoPedido(id);
                console.log(id);
                setTerminoPedido(true);
                clearCart();

                cart.forEach(item => {
                    const documento = doc(db, "Productos", item.id);
                    updateDoc(documento, { stock: increment(-item.stock) });
                });
            })
    }
  return (
    <>
    {terminoPedido ?
        <>
            <Grid
                container
                direction='column'
                alignItems='center'
                spacing={3}
                padding={5}
                sx={{height:"80vh"}}
            >

                <Grid item>
                    <Typography variant='h3' color='initial' sx={{ textAlign: "center" }}>El pedido ha sido creado</Typography>
                </Grid>

                <Grid item>
                    <CheckCircleOutlineIcon
                        sx={{
                            fontSize: "80px",
                            color: "forestgreen"
                        }}
                    />
                </Grid>

                <Grid item>
                    <Typography variant='h4' color='initial' sx={{ textAlign: "center" }}>Su codigo de segumiento es: {codigoPedido}</Typography>
                </Grid>

                <Grid item>
                    <Link to={`/`} style={{ textDecoration: "none" }} >
                        <Button variant='contained'>Volver a la tienda</Button>
                    </Link>
                </Grid>
            </Grid>
        </>
        :
        <Container>
            <Grid
                container
                sx={{height:"100vh"}}
            >

                <Grid
                    item
                    xs={12}
                    md={8}
                >
                    <Box
                        border={1}
                        borderRadius={2}
                        bgcolor="#fff"
                        padding={3}
                        m={3}
                        maxWidth="sm"
                        boxShadow={10}
                    >
                        <Typography
                            variant='h4'
                            mb={2}
                            sx={{ textAlign: "center" }}
                        >
                            Información Personal
                        </Typography>
                        <Grid
                            container
                            spacing={2}
                        >
                            <Grid item xs={6}>
                                <TextField
                                    id="outlined-basic"
                                    label="Nombre"
                                    variant="outlined"
                                    sx={{ width: "100%" }}
                                    error={errorNombre}
                                    helperText={leyendaNombre}
                                    value={nombre}
                                    onChange={(e) => { setNombre(e.target.value); setErrorNombre(false); setLeyendaNombre("") }} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="outlined-basic"
                                    label="Apellido"
                                    variant="outlined"
                                    sx={{ width: "100%" }}
                                    error={errorApellido}
                                    helperText={leyendaApellido}
                                    value={apellido}
                                    onChange={(e) => { setApellido(e.target.value); setErrorApellido(false); setLeyendaApellido("") }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    sx={{ width: "100%" }}
                                    error={errorMail}
                                    helperText={leyendaMail}
                                    value={mail}
                                    onChange={(e) => { setMail(e.target.value); setErrorMail(false); setLeyendaMail("") }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-basic"
                                    label="Dirección"
                                    variant="outlined"
                                    sx={{ width: "100%" }}
                                    error={errorDireccion}
                                    helperText={leyendaDireccion}
                                    value={direccion}
                                    onChange={(e) => { setDireccion(e.target.value); setErrorDireccion(false); setLeyendaDireccion("") }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-basic"
                                    label="Celular"
                                    variant="outlined"
                                    type="number"
                                    sx={{ width: "100%" }}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">+54 </InputAdornment>,
                                    }}
                                    error={errorTel} helperText={leyendaTel}
                                    value={tel} onChange={(e) => { setTel(e.target.value); setErrorTel(false); setLeyendaTel("") }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

                <Grid
                    item
                    xs={12}
                    md={4}
                >
                    <Box
                        border={1}
                        borderRadius={2}
                        bgcolor="#fff"
                        padding={5}
                        m={3}
                        maxWidth="sm"
                        boxShadow={10}
                    >
                        <Typography
                            variant='h4'
                            mb={2}
                            sx={{ textAlign: "center" }}
                        >
                            Total
                        </Typography>
                        <Typography
                            variant='h3'
                            sx={{ textAlign: "center" }}
                            mb={3}
                        >
                            ${totalPrice}
                        </Typography>

                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                        >
                            <Button
                                disabled={disableButton}
                                variant="contained"
                                size='large'
                                onClick={handleClickHacerPedido}
                            >
                                Confirmar orden
                            </Button>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    }
    </>
  )
}