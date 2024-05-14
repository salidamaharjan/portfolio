import userRoutes from "./userRoutes";
import express from "express";
import { educationRoutes, educationGetRoutes } from "./educationRoutes";
import projectRoutes from "./projectRoutes";
import signupRoutes from "./signupRoutes";
import loginRoutes from "./loginRoutes";
import experienceRoutes from "./experienceRoutes";
import authOr401Middleware from "../auth";
const router = express.Router();

router.use("/api", signupRoutes, educationGetRoutes, loginRoutes);
router.use(
  "/api",
  authOr401Middleware,
  userRoutes,
  educationRoutes,
  projectRoutes,
  experienceRoutes
);

export default router;
