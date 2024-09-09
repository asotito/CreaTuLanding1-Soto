import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { obtainProductsById } from "../data/products";

function ItemDetailContainer(){
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(null);
    useEffect(() => {
        console.log("ID recibido desde la URL:", id);
        setLoading(true);
        obtainProductsById(id)
            .then((data) => {
                console.log("Productos obtenidos:", data);
                setProduct(data);
                setLoading(false);
        })
        .catch(error => {
            console.error("Error fetching products:", error);
            setLoading(false);
        });
    }, [id]);

    return (
        <div className="justify-center text-center">
            {loading? <p>Loading...</p> 
            : product ? (
                <ItemDetail product={product}/>
            ) : (
                <p>Producto no encontrado.</p>
            )}
        </div>
    )
}

export default ItemDetailContainer;