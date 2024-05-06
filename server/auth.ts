import jwt from "jsonwebtoken";
import { Request, Response, NextFunction} from "express";
import dotenv from "dotenv";
dotenv.config();

function authMiddleware (res: Response, req: Request, next: NextFunction){

}
