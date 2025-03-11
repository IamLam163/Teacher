import express from "express";
import { getAllUser, signUp } from "../controllers/user-controller.js";
import { auth, isAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, isAdmin, getAllUser);
router.post("/signup", signUp);

export default router;
