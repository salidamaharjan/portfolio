import express, { Response, Request } from "express";
import db from "../config/db";
import { experience } from "../schema";
import authMiddleware from "../auth";

const experienceRoutes = express.Router();

experienceRoutes.get(
  "/experiences",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const allExperience = await db.query.education.findMany();
      res.status(200).json(allExperience);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
);

experienceRoutes.post(
  "/experiences",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      await db.insert(experience).values({
        title: req.body.title,
        company: req.body.company,
        jobDescription: req.body.jobDescription,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        userId: req.body.userId,
      });
      res.status(201).json({ message: "Experience Added" });
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

export default experienceRoutes;