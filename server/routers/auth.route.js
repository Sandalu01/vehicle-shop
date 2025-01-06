import express  from 'express';

const router = express.Router();
import {
    signup,
 
} from "../Controller/auth.controller.js";



router.post("/signup",signup);

export default router;