import { PositionType, TeamMember } from "@prisma/client";
import { prisma } from "./prisma";
import { encryptPassword } from "./auth/passwordUtils";
import { createMailbox } from "../services/mailcow";
import { createPterodactylUser } from "../services/pterodactyl";

export interface UserParams {
  id: string;
  email: string;
  name: string;
  password: string;
  description?: string;
  profile_picture: string;
  discord_tag: string;
  position?: PositionType[];
  mc_username?: string;
}

/**
 * Create a new user in the database
 * @param params UserParams The input parameters
 * @returns Promise<User> The newly created user
 */
export async function createUser(params: UserParams): Promise<TeamMember> {
  const password = await encryptPassword(params.password);

  if (!prisma) {
    throw new Error("Prisma is not initialized");
  }

  const user = await prisma.teamMember
    .create({
      data: {
        id: params.id,
        email: params.email,
        username: params.name,
        password,
        description: params.description,
        discord_tag: params.discord_tag,
        position: params.position && {
          create: params.position.map((position) => ({
            positionType: position,
          })),
        },
        profile_picture: params.profile_picture,
        mc_username: params.mc_username,
      },
    })
    .catch((err) => {
      throw new Error(err);
    });

  await createMailbox(
    params.name,
    params.email.replace("@cubyx.eu", ""),
    password
  ).catch((e) => {
    console.error(e);
  });

  await createPterodactylUser(params.name, params.email, password).catch(
    (e) => {
      console.error(e);
    }
  );

  user.password = "";

  return user;
}
