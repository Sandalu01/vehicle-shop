import User from '../Model/User.Model.js';

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new User({ username, email, password });
    const saved = await newUser.save();

    res.status(200).json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export the function as the default export
export default createUser;
