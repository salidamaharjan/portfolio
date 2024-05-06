import jwt from "jsonwebtoken";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import db from "../config/db";
import { user } from "../schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";
const signupRoutes = express.Router();

signupRoutes.post("/signup", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const userByUsername = await db.query.user.findFirst({
      where: eq(user.username, username),
    });
    if (userByUsername) {
      res.status(401).json({ message: "Username exits" });
      return;
    }
    const newUser = await db
      .insert(user)
      .values({ username, password: await bcrypt.hash(password, 15) })
      .returning({ id: user.id, username: user.username});
    const token = jwt.sign({ id: newUser[0].id }, process.env.SECRET_KEY!, {
      expiresIn: process.env.JWT_TOKEN_EXPIRATION,
    });
    res.status(201).send({
      id: newUser[0].id,
      username: newUser[0].username,
      accessToken: token,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

export default signupRoutes;
