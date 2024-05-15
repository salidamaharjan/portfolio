import express, { Response, Request } from "express";
import db from "../config/db";
import { experience, user } from "../schema";
import { eq, and } from "drizzle-orm";

const experienceRoutes = express.Router();
const experienceGetRoutes = express.Router();

experienceGetRoutes.get(
  "/experiences/:username",

  async (req: Request, res: Response) => {
    try {
      const userExperience = await db.query.user.findFirst({
        where: eq(user.username, req.params.username),
        with: {
          experience: true,
        },
      });
      const allExperience = userExperience?.experience;
      res.status(200).json(allExperience);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
);

experienceRoutes.post(
  "/experiences",

  async (req: Request, res: Response) => {
    try {
      const loggedInUser = (req as any).user;
      const authorizedId = loggedInUser.id;
      await db.insert(experience).values({
        title: req.body.title,
        company: req.body.company,
        jobDescription: req.body.jobDescription,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        userId: authorizedId,
      });
      res.status(201).json({ message: "Experience Added" });
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

experienceRoutes.put(
  "/experiences/:id",
  async (req: Request, res: Response) => {
    try {
      const loggedInUser = (req as any).user;
      // console.log(loggedInUser.id);
      const authorizedId = loggedInUser.id;
      await db
        .update(experience)
        .set({
          title: req.body.title,
          company: req.body.company,
          jobDescription: req.body.jobDescription,
          startDate: req.body.startDate,
          endDate: !!req.body.endDate ? req.body.endDate : null,
        })
        .where(
          and(
            eq(experience.id, parseInt(req.params.id)),
            eq(experience.userId, authorizedId)
          )
        );
      res.status(201).json({ message: "Experience Updated" });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
);

experienceRoutes.delete(
  "/experiences/:id",
  async (req: Request, res: Response) => {
    try {
      const loggedInUser = (req as any).user;
      // console.log(loggedInUser.id);
      const authorizedId = loggedInUser.id;
      await db
        .delete(experience)
        .where(
          and(
            eq(experience.id, parseInt(req.params.id)),
            eq(experience.userId, authorizedId)
          )
        );
      res.status(201).json({ message: "Experience Deleted" });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
);
export { experienceRoutes, experienceGetRoutes };
