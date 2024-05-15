import express, { Response, Request } from "express";
import db from "../config/db";
import { project, user } from "../schema";
import { eq, and } from "drizzle-orm";

const projectRoutes = express.Router();
const projectGetRoutes = express.Router();

projectGetRoutes.get(
  "/projects/:username",

  async (req: Request, res: Response) => {
    try {
      const userProject = await db.query.user.findFirst({
        where: eq(user.username, req.params.username),
        with: {
          project: true,
        },
      });
      const allProject = userProject?.project;
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

projectRoutes.put("/projects/:id", async (req: Request, res: Response) => {
  try {
    const loggedInUser = (req as any).user;
    // console.log(loggedInUser.id);
    const authorizedId = loggedInUser.id;
    console.log("req.params.id", req.params.id);
    console.log(req.body, "req.body");
    await db
      .update(project)
      .set({
        projectName: req.body.projectName,
        description: req.body.description,
        technologiesUsed: req.body.technologiesUsed,
      })
      .where(
        and(
          eq(project.id, parseInt(req.params.id)),
          eq(project.userId, authorizedId)
        )
      );
    res.status(201).json({ message: "Project Updated" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

projectRoutes.delete("/projects/:id", async (req: Request, res: Response) => {
  try {
    const loggedInUser = (req as any).user;
    // console.log(loggedInUser.id);
    const authorizedId = loggedInUser.id;
    await db
      .delete(project)
      .where(
        and(
          eq(project.id, parseInt(req.params.id)),
          eq(project.userId, authorizedId)
        )
      );
    res.status(201).json({ message: "Project Deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

export {projectRoutes, projectGetRoutes};
