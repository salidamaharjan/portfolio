import express, { Response, Request } from "express";
import db from "../config/db";
import { experience } from "../schema";
import { eq } from "drizzle-orm";

const experienceRoutes = express.Router();

experienceRoutes.get(
  "/experiences",

  async (req: Request, res: Response) => {
    try {
      const loggedInUser = (req as any).user;
      const authorizedId = loggedInUser.id;
      const allExperience = await db.query.experience.findMany({
        where: eq(experience.userId, authorizedId),
      });
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

export default experienceRoutes;
