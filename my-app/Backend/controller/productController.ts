import { Request, Response } from "express"
import { Products } from "../models/Products"
const controller = {
  getGenderWomen: function (req: Request, res: Response) {
    Products.findAll({ where: { gender: "women" } })
      .then((results) => res.json(results))
      .catch((err) => res.status(500).send(err))
  },
  getGenderMen: function (req: Request, res: Response) {
    Products.findAll({ where: { gender: "men" } })
      .then((results) => res.json(results))
      .catch((err) => res.status(500).send(err))
  },
  getAllProduct: function (req: Request, res: Response) {
    Products.findAll()
      .then((results) => res.json(results))
      .catch((err) => res.status(500).send(err))
  },
}
export default controller 