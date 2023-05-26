import { Request, Response } from "express";
import { Admin } from '../models/Admin';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'; 

export const getAdmin = async (req: Request, res: Response) => {
  try {
    const admins = await Admin.findAll();
    res.json(admins);
  } catch (error) {
    console.error('Error retrieving admins:', error);
    res.status(500).send('Error retrieving admins'); 
  }
};
////login admin ///
export const adminLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    // console.log(req.body)
   const admins:any = await Admin.findOne({ where: { email} });
      // console.log(admins)
      if (!admins) { 
        return res.status(400).send({
            message: 'Invalid Credentials '
        })
    }
    const matchedPassword = await bcryptjs.compare(
      password as string,
      admins.dataValues.password as string
    );
    if (matchedPassword) {
      const token = jwt.sign(
        {
          userId: admins.id,
          userEmail: admins.email
        },
        "123"
      );
  res.status(200).json({
        token: token,
        message: "Authentication successful",
        id:admins.id
      });
    } else {
      res.status(400).send("Wrong password");
    }
  };

  ///////////signup admin ///////
  export const signupAdmin = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    try {
        const admins = await Admin.create<any>({
            name,
            email,
            password: await bcryptjs.hash(password, 12)
        });
        res.json(admins);
        console.log(admins)  
    } catch (error) {
      console.error("Error signing up user:", error);
      res.status(500).send("Error signing up user");
    }
  };

  