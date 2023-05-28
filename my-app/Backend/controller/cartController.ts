import { Request, Response } from 'express';
import {Cart} from "../models/Cart"
import {Products} from "../models/Products"


const getCart = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    const carts = await Cart.findAll({
      where: {
         users_id: 1,
        
      },
    });
    console.log(carts)
    const productIds = carts.map(cart => cart.getDataValue('products_id'));
    console.log(productIds)
    const products = await Products.findAll({
      where: {
        id: productIds,
      },
      attributes: [
        'id',
        'name',
        'gender',
        'category',
        'quantity',
        'price',
        'image',
        'description',
      ],
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const toCart = async (req: Request, res: Response) => {
 const { users_id, products_id } = req.body;

  try {
    await Cart.create<any>({
      users_id,
      products_id,
    });
    res.json({ message: 'Product successfully added to your cart' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteCart= async(req: Request, res: Response)=>{
  const prodID = req.params.prod;
  const userID = req.params.user;
  console.log(prodID,userID)
  try {
    await Cart.destroy({
     where: { products_id: prodID, users_id: 1 }
    
  })
} catch (error) {
  console.log(error)
  res.json({ message: 'Cart item deleted' })
}
}

export default {
getCart,
toCart,
deleteCart,
};