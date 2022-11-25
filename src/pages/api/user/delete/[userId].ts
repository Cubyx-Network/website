import defaultHandler from "../../_defaultHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";
import { deleteMailbox } from "../../../../services/mailcow";
import { deletePterodactylUser } from "../../../../services/pterodactyl";

const handler = defaultHandler<NextApiRequest, NextApiResponse>().delete(
  async (req, res) => {
    const userId = req.query.userId;

    if (!userId) return res.status(400).send("Missing userId");

    const user = await prisma.teamMember.findUnique({
      where: {
        id: userId as string,
      },
    });

    if (!user) return res.status(404).send("User not found");

    await prisma.teamMember.delete({
      where: {
        id: userId as string,
      },
    });

    const mailcow = await deleteMailbox(user.email);
    const pterodactyl = await deletePterodactylUser(user.username);

    return res.status(200).json({
      mailcow: !mailcow,
      pterodactyl: !pterodactyl,
    });
  }
);

export default handler;
