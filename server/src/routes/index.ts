import userRoutes from "./userRoutes";
import express from "express";
import { educationRoutes, educationGetRoutes } from "./educationRoutes";
import { projectRoutes, projectGetRoutes } from "./projectRoutes";
import signupRoutes from "./signupRoutes";
import loginRoutes from "./loginRoutes";
import { aboutMeGetRoutes } from "./aboutMeRoutes";
import { experienceRoutes, experienceGetRoutes } from "./experienceRoutes";
import authOr401Middleware from "../auth";
import { skillGetRoutes } from "./skillRoutes";
const router = express.Router();

router.use(
  "/api",
  signupRoutes,
  educationGetRoutes,
  skillGetRoutes,
  aboutMeGetRoutes,
  projectGetRoutes,
  experienceGetRoutes,
  loginRoutes
);
router.use(
  "/api",
  authOr401Middleware,
  userRoutes,
  educationRoutes,
  projectRoutes,
  experienceRoutes
);

export default router;
