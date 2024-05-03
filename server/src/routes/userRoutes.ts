import express, { Request, Response } from "express";
import db from "../config/db";
import { user } from "../schema";
import { eq } from "drizzle-orm";

const userRoutes = express.Router();

userRoutes.get("/users", async (req: Request, res: Response) => {
  const resultOfUsers = await db.select().from(user);
  res.status(200).json(resultOfUsers);
});

userRoutes.get("/users/:id", async (req: Request, res: Response) => {
  const resultOfUserById = await db
    .select()
    .from(user)
    .where(eq(user.id, parseInt(req.params.id)));
  res.status(200).json(resultOfUserById);
});

export default userRoutes;
