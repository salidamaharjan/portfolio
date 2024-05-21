import { user, skill } from "../schema";
import express, { Response, Request } from "express";
import db from "../config/db";
import { eq } from "drizzle-orm";

const skillGetRoutes = express.Router();
const skillRoutes = express.Router();

skillGetRoutes.get("/skills/:username", async (req: Request, res: Response) => {
  try {
    const userSkill = await db.query.user.findFirst({
      where: eq(user.username, req.params.username),
      with: { skill: true },
    });
    const skillSet = userSkill?.skill;
    res.status(200).json(skillSet);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

skillRoutes.post("/skills", async (req: Request, res: Response) => {
  try {
    const loggedInUser = (req as any).user;
    console.log(loggedInUser.id);
    const authorizedId = loggedInUser.id;
    await db
      .insert(skill)
      .values({ skillName: req.body.skillName, userId: authorizedId });
    res.status(201).json({ message: "Skill Added" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});
export { skillGetRoutes, skillRoutes };
