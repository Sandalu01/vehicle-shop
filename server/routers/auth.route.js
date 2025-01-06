import express  from 'express';
const router = express.Router();

import {
    signup,
    logout,
    verifyEmail,
 
} from "../Controller/auth.controller.js";
import { verifyToken } from "../Middleware/verfifyToken.js";



router.get("/check-auth", verifyToken);

router.post("/signup",signup);

router.post("/verify-email", verifyEmail);

router.post("/logout",logout);

export default router;