import prisma from "../prisma";
import { User } from "@prisma/client";
import { verifyPassword } from "./passwordUtils";

export interface LoginParams {
  username: string;
  password: string;
}

/**
 * Tries to log in a user with the given email and password.
 * @param params {LoginParams}
 * @returns {Promise<User | null>} The user if the loading was successful, null otherwise.
 */
export async function login(params: LoginParams): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: { username: params.username },
  });

  if (!user) return null;

  if (await verifyPassword(user.password, params.password)) {
    user.password = "";
    return user;
  }

  return null;
}
