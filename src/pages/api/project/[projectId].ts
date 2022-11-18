import defaultHandler from "../_defaultHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

const handler = defaultHandler<NextApiRequest, NextApiResponse>().get(
  async (req, res) => {
    const { projectId } = req.query;
    const project = await prisma.project.findUnique({
      where: {
        id: projectId as string,
      },
    });
    if (!project) {
      res.status(404).end();
      return;
    }
    res.json(project.projectPage);
  }
);

export default handler;
