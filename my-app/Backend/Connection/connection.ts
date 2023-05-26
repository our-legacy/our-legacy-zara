import { Sequelize } from "sequelize-typescript";

import { Users } from "../models/Users";
import { Products } from '../models/Products';
import { Cart } from '../models/Cart';


const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "23647619rbk",
  database: "zara",
  logging: false,
  models: [Users, Products, Cart],
});

export default connection;