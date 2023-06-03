import React, {useState, useContext, useEffect} from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({children}) {

    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const total = () => {
            return cart.reduce((acc, product) => acc + product.quantity * product.price, 0);
        }
        setTotalPrice(total);
    }, [cart])

    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        } else {
            setCart([...cart, { ...item, quantity}]);
        }
    }

    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);
    
    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

  return (
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart
    }}>
        {children}
    </CartContext.Provider>
  )
}
