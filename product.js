//import productList from './json/product.json' with { type: 'json' };

const productList = require("./json/product.json")

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
 
