import express  from 'express';
const router = express.Router();
import createdetails from '../Controller/contactcontroller.js'

router.post("/api/contact",createdetails);


export default router;