import defaultHandler from "./_defaultHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { version } from "../../../package.json";

const handler = defaultHandler<NextApiRequest, NextApiResponse>().get(
  async (req, res) => {
    res.status(200).json({ version });
  }
);

export default handler;
