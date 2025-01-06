import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import {connectDB} from './DB/connectDB.js';
import contactroute from './routers/contact.route.js';

dotenv.config();

dotenv.config();  // it reads the.env file and sets the environment variables.

const app  = express();
const PORT = process.env.PORT ||5001;

app.use(bodyParser.json());
app.use(cors());

app.get('/', async (req, res) => {
    res.send(" hello from node api sandalu thushan ");
})

console.log("Hello from node");


app.use('/api',contactroute );



app.listen(PORT,()=>{
  connectDB();
  console.log("server is running on port :",PORT);
});


