import { Request, Response } from "express";
import { CreateUserInput } from "./users.schemas";
import logger from "src/utils/logger";
import { createUser } from "./users.service";

export const createUserHandler = async (
  req: Request<object, object, CreateUserInput["body"]>,
  res: Response,
) => {
  try {
    const { name, email, password, passwordConfirmation, username } = req.body;

    if (password !== passwordConfirmation)
      return res.status(400).send("Passwords do not match");

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "Please provide all user details",
      });
    }

    try {
      await createUser({
        name,
        email,
        password,
        username,
      });
    } catch (e: any) {
      return res.status(409).send(e.message);
    }

    const user = await createUser(req.body);
    return res.send(user);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
};
