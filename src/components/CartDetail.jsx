import { useCartContext } from "../context/cartContext";
import { addItem } from "../firebase/db";
import { useState } from "react";

function CartDetail(){
    const { cart, getTotalPrice } = useCartContext();
    const [isVisible, setIsVisible] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const  toggleVisibility = () => {
        setIsVisible(prevIsVisible => !prevIsVisible);
    };

    const totalPrice = getTotalPrice();
    const createOrder = async () => {
        const newOrderId = await addItem(cart, totalPrice);
        setOrderId(newOrderId);
        toggleVisibility();
    }

    return (
        <div class="justify-center text-center pt-16">
            <div class="p-10 uppercase text-4xl">
                <h2>Cart Details:</h2>
            </div>
            <div class="text-xl">
            {cart.length === 0 ? (
                <p>Carrito vacío</p>
            ) : (
                cart.map((item) => (
                    <div>
                        <p key={item.id} className="p-5">
                        {item.name}: ${item.price} x{item.quantity}
                        </p>
                        <div class="p-10 uppercase text-4xl">
                            <h1>Total a pagar: ${totalPrice}</h1>
                        </div>
                        <button onClick={createOrder} class="py-2 px-4 bg-gray-400 rounded-lg">Comprar</button>
                    </div>
                ))
            )}
            </div>
            {
                isVisible && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Order ID: {orderId}</h2>
                        <p>Tu pedido ha sido realizado con éxito.</p>
                        <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg" onClick={toggleVisibility}>
                            Cerrar
                        </button>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default CartDetail;