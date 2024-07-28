import { getUsers } from "./users.repository";

export const getAllUsers = async () => {
  const users = await getUsers();
  return users;
};
