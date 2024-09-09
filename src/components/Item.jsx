import { Link } from "react-router-dom";

function Item({product}){
    return (
        <div class="p-5">
            <Link to={`/item/${product.id}`}>
                <div class="border-4 border-black w-72 h-96 content-center">
                    <div class="text-2xl">
                        <h2>{product.name}</h2>
                    </div>
                    <div class="text-xl">
                        <p>Price: ${product.price}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item;