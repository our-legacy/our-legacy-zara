import { Request, Response } from 'express';
import {Cart} from "../models/Cart"

const getCart = async (req: Request, res: Response) => {
  const userId = req.params.id;

  try {
    const carts = await Cart.findAll<any>({
      where: {
        user_id: userId,
      },
    });
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const toCart = async (req: Request, res: Response) => {
  const { user_id, products_id } = req.body;

  try {
    await Cart.create<any>({
      user_id,
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

  try {
    await Cart.destroy({
    where: { products_id: prodID, users_id: userID }
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