const products = [
    {id: 1, name: 'Polo Blanco', price: 15, category: 'polos'},
    {id: 2, name: 'Jeans', price: 30, category: 'pantalones'},
    {id: 3, name: 'Medias Azules', price: 5, category: 'interior'},
    {id: 4, name: 'Polo Rojo', price: 15, category: 'polos'},
    {id: 5, name: 'Pantalon Azul', price: 15, category: 'pantalones'},
    {id: 6, name: 'Medias Negras', price: 15, category: 'interior'},
    {id: 7, name: 'Polo Negro', price: 15, category: 'polos'},
    {id: 8, name: 'Pantalon Deportivo', price: 15, category: 'pantalones'},
];

export function obtainProducts(categoryId) {
    return new Promise((resolve) => {
        
        setTimeout(() => {
            if(categoryId){
                const filteredProducts = products.filter(
                    (product) => product.category === categoryId
                );
                resolve(filteredProducts);
            } else {
                resolve(products);
            }
        }, 1000);
    });
};

export function obtainProductsById(id){
    return new Promise((resolve, reject) => {
        const foundProduct = products.find((product) => {
            return product.id === parseInt(id);
        });
        setTimeout(() => {
        if (foundProduct) {
            resolve(foundProduct);
        } else {
            reject("Producto no encontrado");
        }
        }, 500);
    });
};