import db from "src/db/connection";
import { User, users } from "./users.model";
import { eq } from "drizzle-orm";
import logger from "src/utils/logger";
import bcrypt from "bcrypt";
import config from "config";
import { LoginUserInput } from "./users.schemas";

const saltRounds = config.get<number>("saltRounds");

export const createUser = async (
  input: Pick<User, "name" | "email" | "password" | "username">,
) => {
  const { name, email, password, username } = input;
  const lowercasedEmail = email.toLowerCase();

  try {
    const userExists = await db
      .select()
      .from(users)
      .where(eq(users.email, lowercasedEmail));

    if (userExists.length > 0) return false;

    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

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

export const loginUser = async (input: Pick<User, "email" | "password">) => {
  const { email, password } = input;
  const lowercasedEmail = email.toLowerCase();

  // check if user exists
  try {
    const userExists = await db
      .select()
      .from(users)
      .where(eq(users.email, lowercasedEmail));

    if (userExists.length < 1) return false;

    // compare password
    const { password: hashedPassword } = userExists[0];

    const isPasswordMatch = await bcrypt.compare(password, hashedPassword);

    return isPasswordMatch;

    // return user
  } catch (error) {
    logger.error(error);
  }
};
