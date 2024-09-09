const products = [
    {id: 1, name: 'Polo Blanco', price: 15, category: 'polos', link: '../ItemImages/blanco.jpg'},
    {id: 2, name: 'Jeans', price: 30, category: 'pantalones', link: '../ItemImages/jean.jpg'},
    {id: 3, name: 'Medias Blancas', price: 5, category: 'interior', link: '../ItemImages/mblanca.jpg'},
    {id: 4, name: 'Polo Rojo', price: 15, category: 'polos', link: '../ItemImages/rojo.jpg'},
    {id: 5, name: 'Pantalon Marron', price: 15, category: 'pantalones', link: '../ItemImages/vestir.jpg'},
    {id: 6, name: 'Medias Negras', price: 15, category: 'interior', link: '../ItemImages/mnegra.jpg'},
    {id: 7, name: 'Polo Negro', price: 15, category: 'polos', link: '../ItemImages/negro.jpg'},
    {id: 8, name: 'Pantalon Deportivo', price: 15, category: 'pantalones', link: '../ItemImages/deportivo.jpg'},
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