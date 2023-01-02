
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainter from './components/ItemDetailContainer';
import React from 'react';
import CartProvider from './context/CartContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer texto="Productos" />} />
              <Route path='/categoria/:categoriaId' element={<ItemListContainer texto="Productos" />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/detalle/:detalleId' element={<ItemDetailContainter />} />
            </Routes>    
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
