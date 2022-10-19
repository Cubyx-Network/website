import { NextApiRequest, NextApiResponse } from "next";
import defaultHandler from "../_defaultHandler";
import { userFromRequest } from "../../../services/jwt";
import { prisma } from "../../../lib/prisma";

const handler = defaultHandler<NextApiRequest, NextApiResponse>().post(
  async (req, res) => {
    const user = await userFromRequest(req);

    if (user) {
      const { electionId, candidateId } = req.body;
      const election = await prisma.election.findUnique({
        where: { id: electionId },
        include: { votes: true, candidates: true },
      });

      if (!election) {
        return res.status(404).json({ message: "Election not found" });
      }

      if (new Date(election.endsAt).getTime() < new Date().getTime()) {
        return res.status(400).json({ message: "Election has ended" });
      }

      await prisma.election.update({
        where: { id: electionId },
        data: {
          votes: {
            deleteMany: {
              userId: user.id,
            },
          },
        },
      });

      await prisma.vote.create({
        data: {
          electionId,
          userId: user.id,
          voted: true,
        },
      });

      await prisma.candidate.update({
        where: { id: candidateId },
        data: {
          votes: {
            increment: 1,
          },
        },
      });

      res.json({ success: true });
    } else {
      res.status(404).send("");
    }
  }
);

export default handler;
