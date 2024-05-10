import express, { Response, Request } from "express";
import db from "../config/db";
import { project } from "../schema";
import authMiddleware from "../auth";
import { eq } from "drizzle-orm";

const projectRoutes = express.Router();

projectRoutes.get(
  "/projects",
  
  async (req: Request, res: Response) => {
    try {
      const loggedInUser = (req as any).user;
      const authorizedId = loggedInUser.id;
      const allProject = await db.query.project.findMany({
        where: eq(project.userId, authorizedId),
      });
      res.status(201).json(allProject);
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

projectRoutes.post(
  "/projects",
 
  
  async (req: Request, res: Response) => {
    try {
      const loggedInUser = (req as any).user;
      const authorizedId = loggedInUser.id;
      await db.insert(project).values({
        projectName: req.body.projectName,
        description: req.body.description,
        technologiesUsed: req.body.technologiesUsed,
        userId: authorizedId,
      });
      res.status(201).json({ message: "Project Added" });
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

export default projectRoutes;
