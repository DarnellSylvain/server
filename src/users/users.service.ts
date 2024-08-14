import db from "src/db/connection";
import { User, users } from "./users.model";
import { eq } from "drizzle-orm";

interface createUserInput {
  name: string;
  email: string;
  password: string;
  username: string;
}

export const createUser = async (
  input: Pick<User, "name" | "email" | "password" | "username">,
) => {
  const { name, email, password, username } = input;

  try {
    // Check if user already exists
    const user = await db.select().from(users).where(eq(users.email, email));

    // If not, hash the password

    // Insert user into database

    // Return the success message
  } catch (error) {}

  return {
    name: "John Doe",
    username: "BlackJohn",
    email: "Whatever",
  };
};
