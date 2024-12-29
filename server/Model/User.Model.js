const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
    {
        user_name: {
            type: String, // Missing type definition for name
            required: [true, "Please enter product name"]
        },
        email: {
            type: String,
            required: true,
            default: 0
        },
        password: {
            type: String,
            required: [true, "Please enter product name"]
        }
    },

    {
        timestamps: true 
    }
);



UserSchema.pre("save", async function (next) {
    const user = this;
  
    
    if (!user.isModified("password")) return next();
  
    try {
     
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
      next();
    } catch (error) {
      next(error);
    }
  });

const user = mongoose.model("User", UserSchema);
module.exports = user;