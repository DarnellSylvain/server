import { User, users } from "src/db/schema";
import db from "src/db/connection";
import { CreateUserInput } from "./users.schemas";
import { NodePgDatabase } from "drizzle-orm/node-postgres";

interface IUserRepository {
  create(user: User): Promise<Partial<User>> | null;
}

export class UserRepository implements IUserRepository {
  private database: NodePgDatabase;

  constructor(database: NodePgDatabase) {
    this.database = database;
  }

  async create(
    user: Pick<User, "name" | "email" | "password" | "username" | "salt">,
  ): Promise<Partial<User>> {
    try {
      const newUser = await db.insert(users).values(user).returning({
        id: users.id,
        name: users.name,
        email: users.email,
        username: users.username,
      });

      return newUser[0];
    } catch (error) {
      console.error(error);
      throw new Error("Error creating user");
    }
  }
}
