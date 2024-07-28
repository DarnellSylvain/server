import { getUsers } from "./user-repository";

export const getAllUsers = async () => {
  const users = await getUsers();
  return users;
};
