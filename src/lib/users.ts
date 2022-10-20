import { PositionType, TeamMember } from "@prisma/client";
import { prisma } from "./prisma";
import { encryptPassword } from "./auth/passwordUtils";

export interface UserParams {
  email: string;
  name: string;
  password: string;
  description?: string;
  profile_picture: Buffer;
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

  const user = await prisma.teamMember.create({
    data: {
      email: params.email,
      username: params.name,
      password,
      description: params.description,
      discord_tag: params.discord_tag,
      position: params.position && {
        create: params.position.map((position) => ({ positionType: position })),
      },
      profile_picture: params.profile_picture,
      mc_username: params.mc_username,
    },
  });

  // ToDo: Create user in pterodactyl and mailcow

  user.password = "";

  return user;
}
