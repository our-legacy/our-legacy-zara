const express = require ("express")
const router =express.Router()
import {getUser, userLogin ,signupUser,deleteUser }  from '../controller/userController';

router.get("/getall", getUser);
router.post("/login",userLogin);
router.post("/signup",signupUser)
router.delete("/deleted/:id",deleteUser)


export default router 