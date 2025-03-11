import User from "../models/User.js";
import jwt from "jsonwebtoken";

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 *
 * 
 export const getAllUser = async (req, res) => { 
 try {
    // Pagination
    const page = parseInt(req.query.page) || 1; // Default page = 1
    const limit = parseInt(req.query.limit) || 10; // Default limit = 10
    const skip = (page - 1) * limit;

    // Filtering
    const filter = {};
    if (req.query.username) {
      filter.username = { $regex: req.query.username, $options: "i" }; // Case-insensitive search
    }
    if (req.query.email) {
      filter.email = { $regex: req.query.email, $options: "i" };
    }
    if (req.query.role) {
      filter.role = req.query.role;
    }

    // Fetch users with filtering, pagination, and exclude passwords
    const users = await User.find(filter).select("-password").skip(skip).limit(limit);

    // Get total users count (for pagination metadata)
    const totalUsers = await User.countDocuments(filter);

    res.json({
      totalUsers,
      page,
      totalPages: Math.ceil(totalUsers / limit),
      users,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
}
 */

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
  const { firstName, lastName, email, password, role } = req.body;

  if (!firstName || !lastName || !email || !password || !role) {
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
    password: password,
    role
  });

  try {
    await user.save();
  } catch (error) {
    return console.log("Failed to save User!", error);
  }
  return res.status(201).json({ user });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }

  if (!existingUser) {
    return res.status(404).json({ message: "Could Not Find User!" });
  }

  const validatePassword = bcrypt.compareSync(password, existingUser.password);

  if (!validatePassword) {
    return res.status(400).json({ message: "Incorrect Password" });
  }
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
  return res
    .status(200)
    .json({ user: existingUser, message: "Login Successfull" });
};
