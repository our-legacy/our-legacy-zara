import express, { Router } from 'express';
import cartController from '../controller/cartController';

const  routeCart : Router = express.Router();

// routeCart.get("/:id",cartController.getCart)
routeCart.get("/1",cartController.getCart)
//routeCart.delete("/delete/:prod/:user",cartController.deleteCart)
routeCart.delete("/delete/:prod/1",cartController.deleteCart)
routeCart.post("/add",cartController.toCart)

export default routeCart;