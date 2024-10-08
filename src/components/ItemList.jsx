import Item from './Item';

function ItemList({ products = [] }){
    return (
        <div class="flex justify-center ml-14 mr-14">
            <div class="flex flex-wrap p-10 justify-center text-center ">
                {products.length > 0 ? (
                    products.map(product => (
                        <Item key={product.id} product={product} />
                    ))
                ) : (
                    <p>No hay productos disponibles.</p>
                )}
            </div>
        </div>
    );
};

export default ItemList;