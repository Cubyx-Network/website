import { userFromRequest } from "../../services/jwt";
import defaultHandler from "./_defaultHandler";
import { NextApiRequest, NextApiResponse } from "next";

const handler = defaultHandler<NextApiRequest, NextApiResponse>().get(
  async (req, res) => {
    const user = await userFromRequest(req);

    if (user) {
      res.json(user);
    } else {
      res.status(404).send("");
    }
  }
);
export default handler;
