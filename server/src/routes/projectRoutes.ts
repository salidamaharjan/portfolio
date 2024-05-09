import express, { Response, Request } from "express";
import db from "../config/db";
import { project } from "../schema";
import authMiddleware from "../auth";

const projectRoutes = express.Router();

projectRoutes.get(
  "/projects",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const allProject = await db.query.project.findMany();
      res.status(201).json(allProject);
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

projectRoutes.post(
  "/projects",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const loggedInUser = (req as any).user;
      const authorizedId = loggedInUser;
      await db.insert(project).values({
        projectName: req.body.projectName,
        description: req.body.description,
        technologiesUsed: req.body.technologiesUsed,
        userId: authorizedId,
      });
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

export default projectRoutes;
