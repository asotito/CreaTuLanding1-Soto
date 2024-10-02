import { useCartContext } from "../context/cartContext";

function CartWidget(){
    const { cart } = useCartContext();
    return (
        <div class="relative">
            <img src="/shopping-cart.png" alt="cart" class="w-14" />
            <p class="absolute top-0 left-full bg-red-500 rounded-full text-white text-sm px-3 py-1">
                {cart.length}
            </p>
        </div>
    )
}

export default CartWidget;