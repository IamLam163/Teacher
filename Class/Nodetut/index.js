import axios from "axios";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB is now connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("API is now working");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/api/user", router);
