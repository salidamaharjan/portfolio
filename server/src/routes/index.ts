import userRoutes from "./userRoutes";
import express from "express";
import educationRoutes from "./educationRoutes";
import projectRoutes from "./projectRoutes";

const router = express.Router();

router.use("/api", userRoutes, educationRoutes, projectRoutes);

export default router;
