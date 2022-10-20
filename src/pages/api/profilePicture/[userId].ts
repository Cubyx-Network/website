import { NextApiRequest, NextApiResponse } from "next";
import defaultHandler from "../_defaultHandler";
import { prisma } from "../../../lib/prisma";

const handler = defaultHandler<NextApiRequest, NextApiResponse>().get(
  async (req, res) => {
    const userId = req.query.userId as string;
    if (!userId) {
      res.status(400).json({ error: "Missing userId" });
      return;
    }

    if (!prisma) {
      res.status(500).json({ error: "Database not connected" });
      return;
    }

    const profilePicture = await prisma.teamMember.findUnique({
      where: { id: userId },
      select: { profile_picture: true },
    });

    if (!profilePicture) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.setHeader("Content-Type", "image/png");
    res.status(200).send(profilePicture.profile_picture);
  }
);

export default handler;
