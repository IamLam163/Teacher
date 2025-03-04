import User from "../models/User.js";

export const getAllUser = async (req, res) => {
  let users;
  try {
    users = await User.find();
  } catch (error) {
    console.log("Unable to find list of users from database", error);
  }
  if (!users) {
    return res.status(404).json({ message: "No Users Found!" });
  }
  return res.status(200).json({ users });
};

export const signUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    console.error("Db error", error);
  }
  if (existingUser) {
    return res.status(400).json({ message: "This User Exist! Login instead?" });
  }

  const user = new User({
    firstName,
    lastName,
    email,
    password: password
  });

  try {
    await user.save();
  } catch (error) {
    return console.log("Failed to save User!", error);
  }
  return res.status(201).json({ user });
};
