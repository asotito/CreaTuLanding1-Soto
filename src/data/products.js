const products = [

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