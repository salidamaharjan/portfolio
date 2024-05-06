import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const authorizationHeader = req.header("Authorization");
    if (!authorizationHeader) {
      res.status(401).json({ message: "You are not authorized" });
      return;
    }
    const token = authorizationHeader.replace("Bearer", "");
    if (!token) {
      res.status(401).json({ message: "Authorization token not found" });
      return;
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY!);
    (req as any).user = decoded;
    next();
  } catch (err) {
    res.status(500).json(err);
  }
}

export default authMiddleware;
