import db from "src/db/connection";
import { User, users } from "./users.model";
import { eq } from "drizzle-orm";
import logger from "src/utils/logger";
import bcrypt from "bcrypt";
import config from "config";

const saltRounds = config.get<number>("saltRounds");

export const createUser = async (
  input: Pick<User, "name" | "email" | "password" | "username">,
) => {
  const { name, email, password, username } = input;
  const lowercasedEmail = input.email.toLowerCase();

  try {
    // Check if user already exists
    const userExists = await db
      .select()
      .from(users)
      .where(eq(users.email, lowercasedEmail));

    if (userExists.length > 0) return false;

    // If not, hash the password
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert user into database
    const user = await db
      .insert(users)
      .values({
        name,
        email: lowercasedEmail,
        password: hashedPassword,
        username,
        salt,
      })
      .returning({
        id: users.id,
        name: users.name,
        email: users.email,
        username: users.username,
      });

    return user[0];
  } catch (error) {
    logger.error(error);
  }
};
