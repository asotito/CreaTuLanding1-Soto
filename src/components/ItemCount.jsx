import React, { useState } from "react";
import { useCartContext } from "../context/cartContext";

const ItemCount = ({item}) => {
const [count, setCount] = useState(1);
const [isVisible, setIsVisible] = useState(true);
const { addToCart } = useCartContext()

const add = () => {setCount(count + 1);};

const subtract = () => {if (count > 1) {setCount(count - 1);}};

const hideCount = () => { 
    setIsVisible(false); 
    addToCart({...item, quantity: count}) 
}

return (
    <div class="flex flex-col space-y-6 justify-center p-4">
        <h1>Cantidad:</h1>
        {
            isVisible ? (
                <div class="flex bg-gray-400 justify-between content-center rounded-xl">
                <button onClick={add} class="px-2 text-3xl">-</button>
                <span class="px-2 text-3xl">{count}</span>
                <button onClick={subtract} class="px-2 text-3xl">+</button>
            </div>
            ) : null
        }
        <button onClick={hideCount} class="py-2 px-4 bg-gray-400 rounded-lg">Agregar al carrito</button>
    </div>
    );
};

export default ItemCount;
