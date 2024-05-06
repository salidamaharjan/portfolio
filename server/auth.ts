import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const token = jwt.sign({}, process.env.SECRET_KEY!, {
  expiresIn: 60 * 60 * 1,
});
