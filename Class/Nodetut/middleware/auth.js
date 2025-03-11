import jwt from "jsonwebtoken";

export const auth = (req, res) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = verified;
    return;
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

export const isAdmin = (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access Denied: Admins Only" });
  }
};
