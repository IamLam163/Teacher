import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const mongoURI =
  "mongodb+srv://dbcele:dbcele_9@clustercele2.1imwv.mongodb.net/?retryWrites=true&w=majority&appName=ClusterCELE2";
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const itemSchema = new mongoose.Schema({
  name: String
});
