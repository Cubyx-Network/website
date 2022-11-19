import defaultHandler from "./_defaultHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

let lastCache: Date = new Date();
let cache: { teamMembers: number; projects: number };

function requestTeamMembers() {
  return fetch(
    "https://discord.com/api/v10/guilds/665917454626717746/members?limit=1000",
    {
      headers: {
        Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
      },
    }
  )
    .then((res) => res.json())
    .then(
      (res) =>
        res.filter((member: any) => member.roles.includes("706087016613281842"))
          .length
    );
}

const handler = defaultHandler<NextApiRequest, NextApiResponse>().get(
  async (req, res) => {
    if (cache && new Date().getTime() - lastCache.getTime() < 1000 * 60 * 5) {
      return res.json(cache);
    }

    const teamMembers = await requestTeamMembers();
    const projects = await prisma.project.count();

    cache = { teamMembers, projects };

    res.json(cache);
  }
);

export default handler;
