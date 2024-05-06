import userRoutes from "./userRoutes";
import express from "express";
import educationRoutes from "./educationRoutes";
import projectRoutes from "./projectRoutes";
import signupRoutes from "./signupRoutes";
import loginRoutes from "./loginRoutes";

const router = express.Router();

router.use(
  "/api",
  userRoutes,
  educationRoutes,
  projectRoutes,
  signupRoutes,
  loginRoutes
);

export default router;
