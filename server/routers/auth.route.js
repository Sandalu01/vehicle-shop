import express  from 'express';
const router = express.Router();

import {
    signup,
    login,
    verifyEmail,
 
} from "../Controller/auth.controller.js";
import { verifyToken } from "../Middleware/verifyToken.js";



router.get("/check-auth", verifyToken, checkAuth);


router.post("/signup",signup);
router.post("/verify-email", verifyEmail);

export default router;