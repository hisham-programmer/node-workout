 //import getUsers from './user.js';
 //import { getAllProducts } from './product.js';

const getUsers        = require("./user")
const {getAllProducts,getSingleProduct}  = require("./Product")


const userList = getUsers()
const productList = getAllProducts()
const singleProduct = getSingleProduct(18)

console.log("singleProduct=====>",singleProduct)
