const User = require('../Model/User.Model');



const createuser =   async (req, res) => {
    try {
      

      const { username, email, password } = req.body;

      const newuser = new User({ username, email,password });
      const saved = await newuser.save();



      res.status(200).json(saved);
    
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
