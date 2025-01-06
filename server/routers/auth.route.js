import express  from 'express';
const router = express.Router();

import {
    signup,

    verifyEmail,
 
} from "../Controller/auth.controller.js";
import { verifyToken } from "../Middleware/verfifyToken.js";



router.get("/check-auth", verifyToken, checkAuth);

router.post("/signup",signup);

router.post("/verify-email", verifyEmail);

export default router;