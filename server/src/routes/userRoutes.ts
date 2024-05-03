import express, { Request, Response } from "express";
const userRoutes = express.Router();

userRoutes.get("/users", (req: Request, res: Response) => {
  res.status(200).json([{ username: "user1", password: "password" }]);
});

export default userRoutes;