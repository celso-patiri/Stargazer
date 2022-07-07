import { FighterSchema } from "../schemas/fighters.schema";
import { z } from "zod";
import axios from "axios";

const getGitHubInfo = async (fighters: z.infer<typeof FighterSchema>) => {
  const BASE_URL = "api.github.com/users";
  try {
    const firstUserData = await axios(
      `https://${BASE_URL}/${fighters.firstUser}/repos`
    );
    const secondUserData = await axios(
      `https://${BASE_URL}/${fighters.firstUser}/repos`
    );
  } catch (err) {
    throw "notfound";
  }
  // return firstUserData;
};

export default {
  getGitHubInfo,
};
