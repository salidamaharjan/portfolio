import express, { Response, Request } from "express";
import db from "../config/db";
import { user } from "../schema";
import { eq } from "drizzle-orm";

const aboutMeRoutes = express.Router();
const aboutMeGetRoutes = express.Router();

aboutMeGetRoutes.get(
  "/aboutMe/:username",
  async (req: Request, res: Response) => {
    try {
      const userAboutMe = await db.query.user.findFirst({
        where: eq(user.username, req.params.username),
        with: {
          aboutMe: true,
        },
      });
      const aboutMeSection = userAboutMe?.aboutMe;
      res.status(200).json(aboutMeSection);
    //   console.log(aboutMeSection);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
);
export { aboutMeGetRoutes };
