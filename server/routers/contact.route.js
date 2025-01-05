import express  from 'express';
const router = express.Router();
import {createdetails} from '../Controller/contactcontroller.js'


router.post("/signup",createdetails);