import express, { Response, Request } from "express";
import db from "../config/db";
import { education, user } from "../schema";
import { and, eq } from "drizzle-orm";

const educationRoutes = express.Router();
const educationGetRoutes = express.Router();

educationGetRoutes.get(
  "/educations/:username",
  async (req: Request, res: Response) => {
    try {
      const userEducation = await db.query.user.findFirst({
        where: eq(user.username, req.params.username),
        with: {
          education: true,
        },
      });
      const allEducation = userEducation?.education;

      res.status(200).json(allEducation);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
);

educationRoutes.post("/educations", async (req: Request, res: Response) => {
  try {
    const loggedInUser = (req as any).user;
    console.log(loggedInUser.id);
    const authorizedId = loggedInUser.id;
    await db.insert(education).values({
      degree: req.body.degree,
      schoolName: req.body.schoolName,
      startDate: req.body.startDate,
      yearCompletion: !!req.body.yearCompletion
        ? req.body.yearCompletion
        : null,
      description: req.body.description,
      userId: authorizedId,
    });
    res.status(201).json({ message: "Education Added" });
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
});

educationRoutes.put("/educations/:id", async (req: Request, res: Response) => {
  try {
    const loggedInUser = (req as any).user;
    // console.log(loggedInUser.id);
    const authorizedId = loggedInUser.id;
    console.log("req.params.id", req.params.id);
    console.log(req.body, "req.body");
    await db
      .update(education)
      .set({
        degree: req.body.degree,
        schoolName: req.body.schoolName,
        startDate: req.body.startDate,
        yearCompletion: !!req.body.yearCompletion
          ? req.body.yearCompletion
          : null,
        description: req.body.description,
      })
      .where(
        and(
          eq(education.id, parseInt(req.params.id)),
          eq(education.userId, authorizedId)
        )
      );
    res.status(201).json({ message: "Education Updated" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

educationRoutes.delete(
  "/educations/:id",
  async (req: Request, res: Response) => {
    try {
      const loggedInUser = (req as any).user;
      // console.log(loggedInUser.id);
      const authorizedId = loggedInUser.id;
      await db
        .delete(education)
        .where(
          and(
            eq(education.id, parseInt(req.params.id)),
            eq(education.userId, authorizedId)
          )
        );
      res.status(201).json({ message: "Education Deleted" });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
);
export { educationRoutes, educationGetRoutes };
