import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
    return (
      <div class="flex justify-center items-center pt-28">
        <div class="flex flex-col justify-center items-center shadow-lg w-3/4 space-y-9">
        <div class="justify-center items-center">
          <img src={product.link} alt={product.name} class="rounded-lg h-80 w-full" />
        </div>
        <div>
          <div class="flex space-x-10">
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
          </div>
          <div>
            <ItemCount item={product}/>
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default ItemDetail;