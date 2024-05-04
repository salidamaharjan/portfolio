import express, { Response, Request } from "express";
import db from "../config/db";
import { education } from "../schema";

const educationRoutes = express.Router();

educationRoutes.get("/educations", async (req: Request, res: Response) => {
  const allEducation = await db.query.education.findMany();
  res.status(200).json(allEducation);
});

educationRoutes.post("/educations", async (req: Request, res: Response) => {
  try {
    await db.insert(education).values({
      degree: req.body.degree,
      schoolName: req.body.schoolName,
      startDate: req.body.startDate,
      yearCompletion: req.body.yearCompletion,
      description: req.body.description,
      userId: req.body.userId,
    });
    res.status(201).json({ message: "Education Detail Added" });
  } catch (err) {
    res.status(500).send(err);
  }
});
export default educationRoutes;
