import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar(){
    const [isVisible, setIsVisible] =useState(false);
    const  toggleVisibility = () => {
        setIsVisible(prevIsVisible => !prevIsVisible);
    };
    return(
        <div class="flex-no-wrap fixed top-0 z-10 flex w-full p-3 px-20 justify-between items-center shadow-md shadow-black/5 bg-white">
            <Link to="/" class="flex items-center">
                    <img src="/Logo.webp" class="w-20" alt="Logo" />
                    <h1>ShopA</h1>
            </Link>
            <div class="hidden md:block">
                <ul class="flex gap-20">
                    <li><Link to="/category/polos">Polos</Link></li>
                    <li><Link to="/category/pantalones">Pantalones</Link></li>
                    <li><Link to="/category/interior">Interior</Link></li>
                </ul>
            </div>
            <div class="hidden md:block">
            <Link to="/cart"><CartWidget /></Link>
            </div>
            <div class="md:hidden">
                <button class="bg-slay-400" onClick={toggleVisibility}>
                    {
                        isVisible ? 'Hide' : 'Show'
                    }
                </button>
            </div>
            {
                isVisible && (
                    <div class="absolute top-20 right-0 h-screen w-full bg-white md:hidden">
                        <div class="h-screen w-full fixed my-5 items-center text-center">
                            <div class="flex flex-col ">
                                <ul class="flex flex-col">
                                    <li class="py-5 border-b-2"><Link to="/category/polos" onClick={toggleVisibility}>Polos</Link></li>
                                    <li class="py-5 border-b-2"><Link to="/category/pantalones" onClick={toggleVisibility}>Pantalones</Link></li>
                                    <li class="py-5 border-b-2"><Link to="/category/interior" onClick={toggleVisibility}>Interior</Link></li>
                                </ul>
                            </div>
                            <div class="flex w-full justify-center border-b-2 py-5">
                                <Link to="/cart" onClick={toggleVisibility}><CartWidget /></Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default NavBar;