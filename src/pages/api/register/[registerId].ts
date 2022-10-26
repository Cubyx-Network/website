import { NextApiRequest, NextApiResponse } from "next";
import { PositionType } from "@prisma/client";
import defaultHandler from "../_defaultHandler";
import { createUser } from "../../../lib/users";
import { prisma } from "../../../lib/prisma";

const handler = defaultHandler<NextApiRequest, NextApiResponse>().post(
  async (req, res) => {
    const registerId = req.query.registerId as string;

    const {
      password,
      discord_tag,
      profile_picture,
      description,
      position,
      mc_username,
    } = req.body as {
      password: string;
      discord_tag: string;
      profile_picture: Buffer;
      description?: string;
      position?: PositionType[];
      mc_username?: string;
    };

    if (!password || !discord_tag || !profile_picture) {
      res.status(400).send("Missing fields");
      return;
    }

    if (!prisma) {
      res.status(500).send("Database not connected");
      return;
    }

    const registration = await prisma.registration.findUnique({
      where: { id: registerId },
    });

    if (!registration) {
      res.status(404).send("Registration not found");
      return;
    }

    await prisma.registration.delete({
      where: {
        id: registerId,
      },
    });

    await createUser({
      email: registration.email,
      name: registration.username,
      password,
      discord_tag,
      profile_picture: Buffer.from(profile_picture),
      description,
      position,
      mc_username,
    });

    res.status(200).json("OK");
  }
);

export default handler;
