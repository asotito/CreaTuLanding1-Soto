    import React, { useState } from "react";

    const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState(initial);

    const aumentar = () => {
        setCount(count + 1);
    };

    const disminuir = () => {
        if (count > 1) {
        setCount(count - 1);
        }
    };

    const agregarAlCarrito = () => {
        alert(`Has agregado ${count} productos al carrito.`);
    };

    return (
        <div class="flex justify-center p-4">
        <button onClick={disminuir} class="px-2 border-2 border-black bg-gray-400">-</button>
        <span class="px-2 border-2 border-black">{count}</span>
        <button onClick={aumentar} class="px-2 border-2 border-black bg-gray-400">+</button>
        <button onClick={agregarAlCarrito} class="py-2 px-4 bg-gray-400 rounded-lg">Agregar al carrito</button>
        </div>
    );
    };

    export default ItemCount;
