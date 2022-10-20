const PterodactylClient = require("pterodactyl.js");
import Pterodactyl, { UserModel } from "pterodactyl.js";

if (!process.env.PTERODACTYL_HOST)
  throw new Error("PTERODACTYL_HOST is not defined");
if (!process.env.PTERODACTYL_TOKEN)
  throw new Error("PTERODACTYL_TOKEN is not defined");

const pterodactyl = new PterodactylClient.Builder()
  .setURL(process.env.PTERODACTYL_HOST as string)
  .setAPIKey(process.env.PTERODACTYL_TOKEN as string)
  .asAdmin();

export function createPterodactylUser(
  username: string,
  email: string,
  password: string
): Promise<Pterodactyl.User> {
  return pterodactyl.createUser({
    username,
    email,
    password,
    admin: false,
    firstName: username,
    lastName: "Cubyx",
  });
}

export async function getPterodactylUser(
  username: string
): Promise<Pterodactyl.User | null> {
  const user = (await pterodactyl.getUsers()).find(
    (user: UserModel) => user.username === username.toLowerCase()
  );

  if (!user) return null;
  return await pterodactyl.getUser(user.id);
}

export default pterodactyl;
