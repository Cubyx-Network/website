import { NextApiRequest, NextApiResponse } from "next";
import defaultHandler from "../_defaultHandler";
import { getPterodactylUser } from "../../../services/pterodactyl";
import { getMailbox } from "../../../services/mailcow";
import { isEmptyObject } from "is-what";
import { prisma } from "../../../lib/prisma";

const handler = defaultHandler<NextApiRequest, NextApiResponse>().get(
  async (req, res) => {
    const { user: username } = req.query;

    if (!username) {
      res.status(400).json({ message: "Username is required" });
      return;
    }

    if (!prisma) {
      res.status(500).json({ message: "Database not connected" });
      return;
    }

    const user = await prisma.teamMember.findUnique({
      where: {
        username: username as string,
      },
    });

    const pterodactylUser = await getPterodactylUser(username as string).catch(
      () => null
    );

    const mailbox = await getMailbox(`${username as string}@cubyx.eu`).catch(
      () => {}
    );

    const registration = await prisma.registration.findFirst({
      where: {
        username: username as string,
      },
    });

    const mailcow = !isEmptyObject(mailbox);

    if (user || pterodactylUser || mailcow || registration) {
      return res.status(200).json({
        user: !!user,
        pterodactyl: !!pterodactylUser,
        mailcow,
        registration: !!registration,
      });
    }

    res.status(404).json({
      user: false,
      pterodactyl: false,
      mailcow: false,
      registration: false,
    });
  }
);

export default handler;
