import express, { Response, Request } from "express";
import db from "../config/db";
import { education } from "../schema";
import authMiddleware from "../auth";

const educationRoutes = express.Router();

educationRoutes.get(
  "/educations",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const allEducation = await db.query.education.findMany();
      res.status(200).json(allEducation);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
);

educationRoutes.post(
  "/educations",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const loggedInUser = (req as any).user;
      const authorizedId = loggedInUser;
      await db.insert(education).values({
        degree: req.body.degree,
        schoolName: req.body.schoolName,
        startDate: req.body.startDate,
        yearCompletion: req.body.yearCompletion,
        description: req.body.description,
        userId: authorizedId,
      });
      res.status(201).json({ message: "Education Detail Added" });
    } catch (err) {
      res.status(500).send(err);
    }
  }
);
export default educationRoutes;
