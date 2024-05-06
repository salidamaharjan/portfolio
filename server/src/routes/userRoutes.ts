import express, { Request, Response } from "express";
import db from "../config/db";
import { user } from "../schema";
import { eq } from "drizzle-orm";
import authMiddleware from "../auth";

const userRoutes = express.Router();

userRoutes.get(
  "/users",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const resultOfUsers = await db.query.user.findMany();
      res.status(201).json(resultOfUsers);
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

userRoutes.get(
  "/users/:id",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const resultOfUserById = await db.query.user.findFirst({
        where: eq(user.id, parseInt(req.params.id)),
      });
      res.status(201).json(resultOfUserById);
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

userRoutes.post(
  "/users",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      await db.insert(user).values({
        username: req.body.username,
        password: req.body.password,
      });
      res.status(201).json({ message: "New User Created" });
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

export default userRoutes;
