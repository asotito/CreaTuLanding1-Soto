import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getItem } from "../firebase/db";

function ItemDetailContainer(){
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(null);
    useEffect(() => {
        getItem(setProduct, id);
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