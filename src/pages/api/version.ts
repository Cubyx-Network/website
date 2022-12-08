import defaultHandler from "./_defaultHandler";
import { NextApiRequest, NextApiResponse } from "next";
import pack from "../../../package.json";

const handler = defaultHandler<NextApiRequest, NextApiResponse>().get(
  async (req, res) => {
    res.status(200).json({ version: pack.version });
  }
);

export default handler;
