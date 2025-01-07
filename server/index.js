import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import {connectDB} from './DB/connectDB.js';
import contactroute from './routers/contact.route.js';
import authroutes from "./routers/auth.route.js";

import cookieParser from "cookie-parser";

dotenv.config();  // it reads the.env file and sets the environment variables.

const app  = express();
const PORT = process.env.PORT ||5001;

app.use(bodyParser.json());
app.use(cors());


app.use(cors({ origin: "http://localhost:5173", credentials: true })); 
// not defined  frontend cores  and back end 

app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse incoming cookies



app.get('/', async (req, res) => {
    res.send(" hello from node api sandalu thushan ");
})

console.log("Hello from node");


app.use('/api',contactroute );

app.use("/api/auth",authroutes); 




app.listen(PORT,()=>{
  connectDB();
  console.log("server is running on port :",PORT);
});


