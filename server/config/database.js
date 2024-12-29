const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://user1:Thush12213@cluster0.9qwykfs.mongodb.net/AutoVista?retryWrites=true&w=majority&appName=Cluster0 ';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
