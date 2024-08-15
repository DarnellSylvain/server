import { Request, Response } from "express";
import { CreateUserInput } from "./users.schemas";
import logger from "src/utils/logger";
import { createUser } from "./users.service";

export const createUserHandler = async (
  req: Request<object, object, CreateUserInput["body"]>,
  res: Response,
) => {
  const { name, email, password, passwordConfirmation, username } = req.body;

  if (password !== passwordConfirmation)
    return res.status(400).send("Passwords do not match");

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "Please provide all user details",
    });
  }

  try {
    const user = await createUser({
      name,
      email,
      password,
      username,
    });

    if (!user)
      return res.status(409).send("User already exists with this email");

    return res.send(user);
  } catch (e: any) {
    return res.status(409).send(e.message);
  }
};
