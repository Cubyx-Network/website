import defaultHandler from "../_defaultHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { isArray } from "is-what";

const handler = defaultHandler<NextApiRequest, NextApiResponse>().get(
  async (req, res) => {
    const { id } = req.query;

    const idString = isArray(id) ? id.join("/") : (id as string);

    if (!prisma) {
      res.status(500).json({ error: "Prisma is not initialized" });
      return;
    }

    const link = await prisma.link.findFirst({
      where: {
        id: idString,
      },
    });

    if (!link) {
      res.status(404).json({ error: "Link not found" });
      return;
    }

    res.status(200).json(link.url);
  }
);

export default handler;
