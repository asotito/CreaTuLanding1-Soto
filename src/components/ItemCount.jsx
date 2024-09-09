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
        <div class="flex flex-col space-y-6 justify-center p-4">
            <h1>Cantidad:</h1>
            <div class="flex bg-gray-400 justify-between content-center rounded-xl">
                <button onClick={disminuir} class="px-2 text-3xl">-</button>
                <span class="px-2 text-3xl">{count}</span>
                <button onClick={aumentar} class="px-2 text-3xl">+</button>
            </div>
            <button onClick={agregarAlCarrito} class="py-2 px-4 bg-gray-400 rounded-lg">Agregar al carrito</button>
        </div>
    );
    };

    export default ItemCount;
