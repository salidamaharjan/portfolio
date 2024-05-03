import userRoutes from "./userRoutes";
import express from "express";

const router =  express.Router();

router.use("/api", userRoutes)

export default router;