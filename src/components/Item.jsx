import { Link } from "react-router-dom";

function Item({product}){
    return (
        <div class="p-5">
            <Link to={`/item/${product.id}`}>
                <div class="rounded-lg shadow-lg w-72 h-96 justify-center items-center transform transition-transform duration-300 hover:scale-105">
                    <div class="justify-center items-center">
                        <img src={product.link} alt={product.name} class="rounded-lg h-80 w-full" />
                    </div>
                    <div class="justify-between text-2xl">
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item;