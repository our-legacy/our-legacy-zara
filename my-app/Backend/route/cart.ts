import express, { Router } from 'express';
import cartController from '../controller/cartController';

const  routeCart : Router = express.Router();

routeCart.get("/:id",cartController.getCart)
routeCart.delete("/delete/:prod/:user",cartController.deleteCart)
routeCart.post("/add",cartController.addCart)


export default routeCart;