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
  getAllShirts: function (req: Request, res: Response) {
    Products.findAll({where: { gender: "women", category: "shirt" }}) 
    .then((results) => res.json(results))
    .catch((err) => res.status(500).send(err))
  },
  getAllShirtsM: function (req: Request, res: Response) {
    Products.findAll({where: { gender: "men", category: "shirt" }}) 
    .then((results) => res.json(results))
    .catch((err) => res.status(500).send(err))
  },
  getAllShoesM: function (req: Request, res: Response) {
    Products.findAll({where: { gender: "men", category: "shoes" }}) 
    .then((results) => res.json(results))
    .catch((err) => res.status(500).send(err))
  },
  getAllShoes: function (req: Request, res: Response) {
    Products.findAll({where: { gender: "women", category: "shoes" }}) 
    .then((results) => res.json(results))
    .catch((err) => res.status(500).send(err))
  },
  getAllPerfumeM: function (req: Request, res: Response) {
    Products.findAll({where: { gender: "men", category: "PERFUME" }}) 
    .then((results) => res.json(results))
    .catch((err) => res.status(500).send(err))
  },
  getAllPerfume: function (req: Request, res: Response) {
    Products.findAll({where: { gender: "women", category: "perfume" }}) 
    .then((results) => res.json(results))
    .catch((err) => res.status(500).send(err))
  },
  getAllJeansM: function (req: Request, res: Response) {
    Products.findAll({where: { gender: "men", category: "jeans" }}) 
    .then((results) => res.json(results))
    .catch((err) => res.status(500).send(err))
  },
  getAllJeans: function (req: Request, res: Response) {
    Products.findAll({where: { gender: "women", category: "jeans" }}) 
    .then((results) => res.json(results))
    .catch((err) => res.status(500).send(err))
  },
  getAllTop: function (req: Request, res: Response) {
    Products.findAll({where: { gender: "women", category: "top" }}) 
    .then((results) => res.json(results))
    .catch((err) => res.status(500).send(err))
  },
  getAllSkirt: function (req: Request, res: Response) {
    Products.findAll({where: { gender: "women", category: "skirts" }}) 
    .then((results) => res.json(results))
    .catch((err) => res.status(500).send(err))
  },
  getAllBag: function (req: Request, res: Response) {
    Products.findAll({where: { gender: "women", category: "bag" }}) 
    .then((results) => res.json(results))
    .catch((err) => res.status(500).send(err))
  },
}
export default controller 