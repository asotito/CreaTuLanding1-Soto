import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div class="flex p-3 px-20 justify-between items-center">
            <Link to="/" class="flex items-center">
                    <img src="/Logo.webp" class="w-20" alt="Logo" />
                    <h1>ShopA</h1>
            </Link>
            <div>
                <ul class="flex gap-40">
                    <li><Link to="/category/polos">Polos</Link></li>
                    <li><Link to="/category/pantalones">Pantalones</Link></li>
                    <li><Link to="/category/interior">Interior</Link></li>
                </ul>
            </div>
            <CartWidget />
        </div>
    )
}

export default NavBar;