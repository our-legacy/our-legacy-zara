import { Request, Response } from 'express';
import {Cart} from "../models/Cart"

const allCarts = async (req: Request, res: Response) => {
  try {
    const carts = await Cart.findAll();
    res.json(carts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const cartForUser = async (req: Request, res: Response) => {
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

const remove = async (req: Request, res: Response) => {
  const cartId = req.params.id;

  try {
    await Cart.destroy({
      where: {
        id: cartId,
      },
    });
    res.json('Deleted');
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const removeCartOfUser = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);

  try {
    await Cart.destroy<any>({
      where: {
        user_id: userId,
      },
    });
    res.json('Deleted');
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default {
  allCarts,
  cartForUser,
  toCart,
  remove,
  removeCartOfUser,
};