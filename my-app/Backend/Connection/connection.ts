import { Sequelize } from "sequelize-typescript";

import { Users } from "../models/Users";
import { Products } from '../models/Products';
import { Cart } from '../models/Cart';
import { Admin } from "../models/Admin";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "root",
  database: "zara",
  logging: false,
  models: [Users, Products, Cart,Admin],
});

export default connection;