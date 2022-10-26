import defaultHandler from "./_defaultHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

const handler = defaultHandler<NextApiRequest, NextApiResponse>().post(
  async (req, res) => {
    const { username, email } = req.body;

    if (!username || !email) {
      res.status(400).json({ error: "Missing username or email" });
      return;
    }

    if (!prisma) {
      res.status(500).json({ error: "Database not connected" });
      return;
    }

    const registration = await prisma.registration.create({
      data: {
        username,
        email,
      },
    });

    res.status(200).json(registration.id);
  }
);

export default handler;
