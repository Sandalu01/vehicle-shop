const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/database.js');
const User = require('./Model/User.Model.js');
const Contact = require('./Model/Contact.Model.js');
const app = express();

connectDB();

app.use(bodyParser.json());
app.use(cors());

app.get('/', async (req, res) => {
    res.send(" hello from node api sandalu thushan ");
})

console.log("Hello from node");


app.post('/api/signup', async (req, res) => {
    try {
      
        //  const Product = await Product.create(req.body);

      const { username, email, password } = req.body;

      const newuser = new User({ username, email,password });
      const saved = await newuser.save();

      res.status(200).json(saved);
    
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });



  app.post('/api/contact', async (req, res) => {
    try {
      

      const { name, email, subject,message } = req.body;

      const userconatct = new Contact({ name, email,subject,message });
      const saved = await userconatct.save();

      res.status(200).json(saved);
    
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

