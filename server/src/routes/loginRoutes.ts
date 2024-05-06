import express, { Response, Request } from "express";
import dotenv from "dotenv";
dotenv.config();
import db from "../config/db";
import { eq } from "drizzle-orm";
import { user } from "../schema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginRoutes = express.Router();
loginRoutes.post("/login", async (req: Request, res: Response) => {
  try {
    const findRequestedUser = await db.query.user.findFirst({
      where: eq(user.username, req.body.username),
    });
    if (!findRequestedUser) {
      res.status(401).json({ message: "User not found!" });
      return;
    }
    const checkPasswordValid = await bcrypt.compare(
      req.body.password,
      findRequestedUser.password
    );
    if (!checkPasswordValid) {
      res.status(401).json({ message: "Incorrect Username Or Password" });
      return;
    }
    const token = jwt.sign({}, process.env.SECRET_KEY!, {
      expiresIn: process.env.JWT_TOKEN_EXPIRATION,
    });
    res.status(201).send({
        id: findRequestedUser.id,
        username: findRequestedUser.username,
        accessToken: token
    })
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

export default loginRoutes;
