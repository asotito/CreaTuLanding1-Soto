
import { cartContext } from "./cartContext";
import { useState } from "react";

function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (product) => setCart([...cart, product])

    const getTotalPrice = () => {
        const getPrices = cart.map(item => item.price*item.quantity)
        const total = getPrices.reduce((acc, current) => acc + current, 0)
        return total;
    }

    return (
        <cartContext.Provider value={{ cart, addToCart, getTotalPrice }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider;