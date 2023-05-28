import "reflect-metadata";
import cookieParser from 'cookie-parser' ;
import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./Connection/connection";
import data from "./Connection/Data.json"
import userRoute from "./route/user";
import routerP from "./route/products"
import cartRoute from "./route/cart"
import adminRoute from "./route/Admin"
import {Products} from "./models/Products"

const app = express();
app.use(express.json());
app.use(cors());

app.use(cookieParser());
app.use("/auth", userRoute);
app.use("/products", routerP)
app.use("/cart", cartRoute)
app.use ("/admin",adminRoute)

app.get("/", (req: Request, res: Response): Response => {
  return res.json({ message: "Sequelize Example 🤟" });
});




const start = async (): Promise<void> => {
    try {
      await connection.sync();
      app.listen(4000,() => {
        console.log("Server started on port 4000");
      });
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };

  // connection.sync().then(() => {
  //   app.listen(4000, () => {
  //     console.log("Server is running on port 4000");
  //   });
  // }).then(() => {
  //   async function insertDummyData() {
  //     try {
  //       // Iterate over the data array
  //       for (const product of data) {
  //         const { name, image, price, quantity, gender, category, description } = product;
    
  //         // Check if a similar entry already exists
  //         const existingProduct = await Products.findOne({
  //           where: {
  //             name,
  //             gender,
  //             category,
  //           },
  //         });
    
  //         if (!existingProduct) {
  //           // No similar entry found, proceed with insertion
  //           await Products.create<any>({
  //             name,
  //             image,
  //             price,
  //             quantity,
  //             gender,
  //             category,
  //             description,
  //           });
  //           console.log('Product inserted successfully');
  //         } else {
  //           console.log('Similar entry already exists');
  //         }
  //       }
  //     } catch (error) {
  //       console.log(`Error: ${error}`);
  //     }
  //   }
    
  //   // Call the function to insert dummy data
  //   insertDummyData();
  // })

void start();