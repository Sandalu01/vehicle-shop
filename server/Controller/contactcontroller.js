import Contact from '../Model/Contact.Model.js';

 export const createdetails = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const newContact = new Contact({ name, email, subject, message });

    const saved = await newContact.save();


    res.status(200).json(saved);
  } catch (error) {

    res.status(500).json({ message: error.message });
  }
};



