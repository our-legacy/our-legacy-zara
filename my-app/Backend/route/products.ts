import express from 'express'
import controller from '../controller/productController'


const routerP = express.Router()

routerP.get("/women", controller.getGenderWomen)
routerP.get("/men", controller.getGenderMen)
routerP.get("/products", controller.getAllProduct)


export default routerP