import { serialize } from "cookie";
import { NextApiResponse } from "next";
import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import { IncomingMessage } from "http";
import { NextApiRequestCookies } from "next/dist/server/api-utils";
import prisma from "../lib/prisma";

const JWT_TOKEN_KEY = process.env.JWT_TOKEN_KEY;
const cookieOptions = {
  httpOnly: true,
  maxAge: 2592000,
  path: "/",
  sameSite: "Strict",
  secure: process.env.NODE_ENV === "production",
};

function setCookie(
  res: any,
  name: string,
  value: string | object,
  cookieOptions?: object
): void {
  const stringValue =
    typeof value === "object" ? `j:${JSON.stringify(value)}` : String(value);

  res.setHeader(
    "Set-Cookie",
    serialize(name, String(stringValue), cookieOptions)
  );
}

/**
 * Creates JWT token and sets it as a cookie.
 * @param res
 * @param user
 */
export function authenticateUser(res: NextApiResponse, user: User): void {
  if (!user) return;

  if (!JWT_TOKEN_KEY) {
    throw new Error("JWT_TOKEN_KEY is not set");
  }

  const token = jwt.sign(
    { username: user.username, id: user.id },
    JWT_TOKEN_KEY,
    {
      expiresIn: "1d",
    }
  );

  setCookie(res, "session", token, cookieOptions);
}

/**
 * Removes JWT token cookie. This will log the user out.
 * @param res
 */
export function clearUser(res: NextApiResponse): void {
  setCookie(res, "session", "0", {
    ...cookieOptions,
    path: "/",
    maxAge: 1,
  });
}

/**
 * Gets the user from the JWT token cookie.
 * @param req {IncomingMessage & {cookies: NextApiRequestCookies}}
 * @returns {Promise<User | null>} The user if the token is valid, null otherwise.
 */
export async function userFromRequest(
  req: IncomingMessage & { cookies: NextApiRequestCookies }
): Promise<User | undefined> {
  const { session: token } = req.cookies;

  if (!token) return undefined;

  if (!JWT_TOKEN_KEY) {
    throw new Error("JWT_TOKEN_KEY is not set");
  }

  try {
    const data = jwt.verify(token, JWT_TOKEN_KEY);

    if (!data) return undefined;

    const user = await prisma.user.findUnique({
      where: { username: (data as any).username },
    });

    if (user) user.password = "";

    return user || undefined;
  } catch (error) {
    return undefined;
  }
}
