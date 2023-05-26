const express = require ("express")
const router =express.Router()
import { adminLogin, getAdmin, signupAdmin } from "../controller/Admin"
 
router.get("/getAdmin",getAdmin)  
router.post("/loginadmin",adminLogin)
router.post("/signadmin",signupAdmin)
export default router 