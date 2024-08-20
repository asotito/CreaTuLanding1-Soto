import CartWidget from "./CartWidget";

function NavBar(){
    return(
        <div class="flex p-3 px-20 justify-between items-center">
            <a href="/" class="flex items-center">
                    <img src="Logo.webp" class="w-20" alt="Logo" />
                    <h1>ShopA</h1>
            </a>
            <div>
                <ul class="flex gap-40">
                    <li><a href="#">Polos</a></li>
                    <li><a href="#">Pantalones</a></li>
                    <li><a href="#">Interior</a></li>
                </ul>
            </div>
            <CartWidget />
        </div>
    )
}

export default NavBar;