import express  from 'express';
const router = express.Router();

import {createdetails }from '../Controller/contactcontroller.js'

// routes for contact

router.post("/contact",createdetails);

export default router;