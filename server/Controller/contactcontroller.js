const Contact = require('../Model/Contact.Model.js');



const ContactDetails =   async (req, res) => {
    try {
      
      const { name, email, subject,message, } = req.body;

      const newuser = new Contact({ name, email,subject,message,});
      const saved = await newuser.save();
      res.status(200).json(saved);
    
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
