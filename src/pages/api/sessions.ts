import { authenticateUser, clearUser } from "../../services/jwt";
import { login } from "../../lib/auth/login";
import defaultHandler from "./_defaultHandler";
import { NextApiRequest, NextApiResponse } from "next";

const handler = defaultHandler<NextApiRequest, NextApiResponse>()
  .post(async (req, res) => {
    const user = await login(req.body);

    if (user) {
      authenticateUser(res, user);
      res.json(user);
    } else {
      res.status(404).send("");
    }
  })
  .delete((_req, res) => {
    clearUser(res);

    res.send("");
  });

export default handler;
