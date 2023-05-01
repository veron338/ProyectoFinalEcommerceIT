import {Router} from  "express"
import * as ProductController from "../controllers/Product.controller.js"

const ProductRoutes = Router()



//All views Products
ProductRoutes.get("/products",ProductController.getProducts)
//Views Produsct for ID
ProductRoutes.get("/products/:id",ProductController.getProductsById)
//Create Item Product
ProductRoutes.post("/products",ProductController.createProducts)
//Put update Product for ID
ProductRoutes.put("/products/:id",ProductController.updateProductsById)
//Delete Item Product for ID
ProductRoutes.delete("/products/:id",ProductController.deleteProductById)
//Imagen Upload

export default ProductRoutes