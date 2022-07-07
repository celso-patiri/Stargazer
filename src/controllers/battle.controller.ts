import { Request, Response } from "express";
import BattleService from "../services/battle.service";

const battle = async (req: Request, res: Response) => {
  const data = await BattleService.getGitHubInfo(req.body);
  console.log(data);
  res.send(200);
};

export default {
  battle,
};
