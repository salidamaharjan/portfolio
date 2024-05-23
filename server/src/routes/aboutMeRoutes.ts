import express, { Response, Request } from "express";
import db from "../config/db";
import { aboutMe, user } from "../schema";
import { and, eq } from "drizzle-orm";

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
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
);

aboutMeRoutes.put("/aboutMe/:id", async (req: Request, res: Response) => {
  try {
    const loggedInUser = (req as any).user;
    const authorizedId = loggedInUser.id;
    await db
      .update(aboutMe)
      .set({
        description: req.body.description,
      })
      .where(
        and(
          eq(aboutMe.id, parseInt(req.params.id)),
          eq(aboutMe.userId, authorizedId)
        )
      );
    res.status(201).json({ message: "AboutMe Updated" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

export { aboutMeGetRoutes, aboutMeRoutes };
