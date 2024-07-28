import { users } from "src/db/schema";
import db from "src/db/connection";

export const getUsers = async () => {
  const result = await db.select().from(users);
  return result;
};
