import express from "express"
import { registerUser } from "../controller/user_controller"

const router = express.Router()

router.get("/register",registerUser)





export default router