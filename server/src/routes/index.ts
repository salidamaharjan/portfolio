import userRoutes from "./userRoutes";
import express from "express";
import educationRoutes from "./educationRoutes";
import projectRoutes from "./projectRoutes";
import signupRoutes from "./signupRoutes";
import loginRoutes from "./loginRoutes";
import experienceRoutes from "./experienceRoutes";
import loggedInUserMiddleware from "../loggedInUser";
const router = express.Router();

router.use("/api", signupRoutes, loginRoutes);
router.use(
  "/api",
  loggedInUserMiddleware,
  userRoutes,
  educationRoutes,
  projectRoutes,
  experienceRoutes
);

export default router;
