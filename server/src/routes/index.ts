import userRoutes from "./userRoutes";
import express from "express";
import educationRoutes from "./educationRoutes";

const router = express.Router();

router.use("/api", userRoutes, educationRoutes);

export default router;
