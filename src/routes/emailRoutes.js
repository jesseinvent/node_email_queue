import { Router } from "express";
import { send } from "../controllers/emailController.js";

const router = Router();

router.get("/", (req, res, next) => {
  return res.status(200).json({ message: "Hello world!" });
});

router.post("/send", send);

export default router;
