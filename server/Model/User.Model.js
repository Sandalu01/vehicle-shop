import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter user name"],
    },
    email: {
      type: String,
      required: true,
      default: 0,
    },
    password: {
      type: String,
      required: [true, "Please enter user password"],
    },
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
  }
);

// Hash the password before saving
UserSchema.pre("save", async function (next) {
  const user = this;

  // If the password is not modified, skip hashing
  if (!user.isModified("password")) return next();

  try {
    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", UserSchema);

// Export the model as the default export
export default User;
