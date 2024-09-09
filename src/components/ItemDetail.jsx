import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
    return (
      <div>
        <h2>{product.name}</h2>
        <p>Precio: ${product.price}</p>
        <ItemCount initial={1} />
      </div>
    );
  };
  
  export default ItemDetail;