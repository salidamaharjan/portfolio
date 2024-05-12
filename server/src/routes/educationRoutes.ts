import express, { Response, Request } from "express";
import db from "../config/db";
import { education } from "../schema";
import { eq } from "drizzle-orm";

const educationRoutes = express.Router();

educationRoutes.get("/educations", async (req: Request, res: Response) => {
  try {
    const loggedInUser = (req as any).user;
    // console.log(loggedInUser.id);
    const authorizedId = loggedInUser.id;
    const allEducation = await db.query.education.findMany({
      where: eq(education.userId, authorizedId),
    });
    res.status(200).json(allEducation);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

educationRoutes.post("/educations", async (req: Request, res: Response) => {
  try {
    const loggedInUser = (req as any).user;
    // console.log(loggedInUser.id);
    const authorizedId = loggedInUser.id;
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
    console.log(err)

    res.status(500).send(err);
  }
});

educationRoutes.put("/educations/:id", async (req: Request, res: Response) => {
  try {
    const loggedInUser = (req as any).user;
    // console.log(loggedInUser.id);
    const authorizedId = loggedInUser.id;
      console.log(req.params.id);
    await db
      .update(education)
      .set({
        degree: req.body.degree,
        schoolName: req.body.schoolName,
        startDate: req.body.startDate,
        yearCompletion: req.body.yearCompletion,
        description: req.body.description,
        userId: authorizedId,
      })
      .where(eq(education.id, parseInt(req.params.id)));
    res.status(201).json({ message: "Education Updated" });
  } catch (err) {
    console.log(err)
    res.status(500).send(err);
  }
});
export default educationRoutes;
