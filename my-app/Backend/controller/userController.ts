import { Request, Response } from "express";
import { Users } from "../models/Users";
import { getRepository } from "typeorm";
import bcryptjs from 'bcryptjs';
import  jwt  from 'jsonwebtoken';





export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await Users.findAll();
    res.json(user);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).send("Error retrieving users");
  }
};
 

export const userLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    // console.log(req.body)

    const user: any = await Users.findOne({ where: { email} });
    // console.log(user)
    if (!user) {
      return res.status(400).send({
        message: 'Invalid Credentials'
      });
    }

    const matchedPassword = await bcryptjs.compare(
      password as string,
      user.dataValues.password as string
    );

    if (matchedPassword) {
      const token = jwt.sign(
        {
          userId: user.id,
          userEmail: user.email
        },
        '123'
      );

      return res.status(200).json({
        token: token,
        message: 'Authentication successful',
        id: user.id
      });
    } else {
      return res.status(400).send('Wrong password');
    }
  } catch (error) {
    // Handle the error appropriately
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};



/////signup //////////
export const signupUser = async (req: Request, res: Response) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    const users = await Users.create<any>({
      firstname,
      lastname,
      email,
      password: await bcryptjs.hash(password, 12)
    });

    res.json(users);
  } catch (error) {
    console.error("Error signing up user:", error);
    res.status(500).send("Error signing up user");
  }
};
 /////delete user///////
export const deleteUser=async(req:Request,res:Response)=>{
  const { id } = req.params; // Assuming the ID is passed as a parameter

  try {
    const user = await Users.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.destroy();

    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}









// export const AuthenticatedUser = async (req: Request, res: Response) => {
//   try {
//       console.log(req.cookies);
//       const accessToken = req.cookies['accessToken'];

//       const payload: any = verify(accessToken, "access_secret");

//       if(!payload) {
//           return res.status(401).send({
//               message: 'Unauthenticated'
//           })
//       }

//       const user = await getRepository(Users).findOne({
//           where: {
//               id: payload.id
//           }
//       });

//       if (!user) {
//           return res.status(401).send({
//               message: 'Unauthenticated'
//           })
//       }

//       const {password, ...data} = user;

//       res.send(data);

//   }catch(e) {
//       console.log(e)
//       return res.status(401).send({
//           message: 'Unauthenticated'
//       })
//   }
// }


// export const Refresh = async (req: Request, res: Response) => {
//   try {
//       const refreshToken = req.cookies['refreshToken'];

//       const payload: any = verify(refreshToken, "refresh_secret");

//       if (!payload) {
//           return res.status(401).send({
//               message: 'unauthenticated'
//           })
//       }

//       const accessToken = sign({
//           id: payload.id,
//       }, "access_secret", { expiresIn: 60 * 60 })

//       res.cookie('accessToken', accessToken, {
//           httpOnly: true,
//           maxAge: 24 * 60 * 60 * 1000 //equivalent to 1 day
//       });

//       res.send({
//           message: 'success'
//       })

//   }catch(e) {
//       return res.status(401).send({
//           message: 'unauthenticated'
//       })
//   }
// }