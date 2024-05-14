import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();

function loggedInUserMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authorizationHeader = req.header("Authorization");
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      return next();
    }
    const token = authorizationHeader.replace("Bearer ", "");
    // console.log(token, "token");
    if (!token) {
      return next();
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY!);
    // console.log("decoded", decoded);
    (req as any).user = decoded;
    next();
  } catch (err) {
    // console.log("req.username", (req as any).user);
    next();
  }
}

export default loggedInUserMiddleware;
