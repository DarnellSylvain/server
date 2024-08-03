import db from "src/db/connection";
import { User } from "./users.model";

export const createUser = async (input: Partial<User>) => {
  return {
    name: "John Doe",
    username: "BlackJohn",
    email: "Whatever",
  };
};
