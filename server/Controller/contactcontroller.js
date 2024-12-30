const Contact = require('../Model/Contact.Model.js');



const ContactDetails =   async (req, res) => {
    try {
      

      const { username, email, password } = req.body;

      const newuser = new Contact({ username, email,password });
      const saved = await newuser.save();



      res.status(200).json(saved);
    
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };