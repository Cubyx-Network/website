import { User } from "@prisma/client";
import prisma from "./prisma";
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
export async function createUser(params: UserParams): Promise<User> {
  const password = await encryptPassword(params.password);
  const user = await prisma.user.create({
    data: { email: params.email, username: params.name, password },
  });

  user.password = "";

  return user;
}
