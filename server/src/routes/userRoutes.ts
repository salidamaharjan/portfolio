import express, { Request, Response } from "express";
import db from "../config/db";
import { user } from "../schema";

const userRoutes = express.Router();

userRoutes.get("/users", async (req: Request, res: Response) => {
  const resultOfUsers = await db.select().from(user);
  res.status(200).json(resultOfUsers);
});

export default userRoutes;
