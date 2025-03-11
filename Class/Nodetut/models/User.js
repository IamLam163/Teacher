import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" }
});

// const UserModel = mongoose.model("User", userSchema);
// const User = mongoose.models.User || mongoose.model("User", userSchema);

const UserModel = model("User", userSchema);

export default UserModel;
