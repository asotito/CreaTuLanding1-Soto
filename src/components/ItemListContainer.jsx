import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getItemsByCategory } from "../firebase/db";
import { getItems } from "../firebase/db";

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [productsData, setProductData] = useState([]);

    useEffect(() => {
        if(categoryId === "polos" || categoryId === "pantalones" || categoryId === "interior"){
            getItemsByCategory(setProductData, categoryId);
        } else {
            getItems(setProductData);
        }
    }, [categoryId]);

    return(
        <div class="justify-center text-center">
            {
                <div>
                    <div class="p-10 uppercase text-4xl">
                        <h1 >{categoryId ? `${categoryId}` : 'Todos los Productos'}</h1>
                    </div>
                    <ItemList products={productsData} category={categoryId}></ItemList>
                </div>
            }
        </div>
    )
}

export default ItemListContainer;