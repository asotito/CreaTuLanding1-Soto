import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { obtainProducts } from "../data/products";

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [productsData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        obtainProducts(categoryId)
            .then((data) => {
                setProductData(data);
                setLoading(false);            
            })
            .catch((error) => {
                console.error('Error:', error);
                setLoading(false);
            });
    }, [categoryId]);

    return(
        <div class="justify-center text-center mt-14">
            {loading ? (
                <div class="content-center w-full h-96 text-3xl">
                    <h1>Cargando productos...</h1>
                </div>
            ) : (
                <div class="">
                    <div class="p-10 uppercase text-4xl">
                        <h1 >{categoryId ? `${categoryId}` : 'Todos los Productos'}</h1>
                    </div>
                    <ItemList products={productsData}></ItemList>
                </div>
            )}
        </div>
    )
}

export default ItemListContainer;