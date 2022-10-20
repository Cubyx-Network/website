import { TeamMember } from "@prisma/client";
import { prisma } from "./prisma";
import { encryptPassword } from "./auth/passwordUtils";

export interface UserParams {
  email: string;
  name: string;
  password: string;
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
      description: "",
      discord_tag: "",
      position: {},
      profile_picture: Buffer.from(""),
    },
  });

  user.password = "";

  return user;
}
