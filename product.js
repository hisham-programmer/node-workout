import productList from './json/product.json' with { type: 'json' };

function getAllProducts() {
    return productList;
}

function getSingleProduct(id) {
    return productList.filter((value => value.id == id));
}


module.exports = {
    getAllProducts,
    getSingleProduct
}
 
