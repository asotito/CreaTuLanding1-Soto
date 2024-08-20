

function CartWidget(){
    return (
        <div class="relative">
            <a href="#">
                <img src="shopping-cart.png" alt="cart" class="w-14" />
                <span class="absolute top-0 left-full text-white text-xs px-2 py-1 bg-red-500 rounded-full">
                        3
                </span>
            </a>
        </div>
    )
}

export default CartWidget;