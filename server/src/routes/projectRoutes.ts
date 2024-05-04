import express, { Response, Request } from "express";
import db from "../config/db";
import { project } from "../schema";

const projectRoutes = express.Router();

projectRoutes.get("/projects", async (req: Request, res: Response) => {
  try {
    const allProject = await db.query.project.findMany();
    res.status(201).json(allProject);
  } catch (err) {
    res.status(500).send(err);
  }
});

projectRoutes.post("/projects", async (req: Request, res: Response) => {
  try {
    await db.insert(project).values({
      projectName: req.body.projectName,
      description: req.body.description,
      technologiesUsed: req.body.technologiesUsed,
      userId: req.body.userId,
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

export default projectRoutes;
