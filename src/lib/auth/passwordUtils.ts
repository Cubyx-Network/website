import argon2 from "argon2";

/**
 * Hashes a password using argon2
 * @param password
 * @returns {Promise<string>} The hashed password
 */
export async function encryptPassword(password: string): Promise<string> {
  return argon2.hash(password);
}

/**
 * Verifies a password against a hash
 * @param hash
 * @param password
 * @returns {Promise<boolean>}
 */
export async function verifyPassword(
  hash: string,
  password: string
): Promise<boolean> {
  return argon2.verify(hash, password);
}
