import express  from 'express';
const router = express.Router();
import {createdetails }from '../Controller/contactcontroller.js'

router.post("/contact",createdetails);


export default router;