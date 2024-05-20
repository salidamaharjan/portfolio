import { user } from "../schema";
import express, { Response, Request } from "express";
import db from "../config/db";
import { eq } from "drizzle-orm";

const skillGetRoutes = express.Router();
const skillRoutes = express.Router();

skillGetRoutes.get("/skill/:username", async (req: Request, res: Response) => {
  try {
    const userSkill = await db.query.user.findFirst({
      where: eq(user.username, req.params.username),
      with: { skill: true },
    });
    const skillSet = userSkill?.skill;
    res.status(200).json(skillSet);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

export { skillGetRoutes };
