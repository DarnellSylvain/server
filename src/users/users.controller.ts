import { Request, Response } from "express";
import { CreateUserInput } from "./users.schemas";
import logger from "src/utils/logger";
import { createUser } from "./users.service";

export const createUserHandler = async (
  req: Request<object, object, CreateUserInput["body"]>,
  res: Response,
) => {
  try {
    const user = await createUser(req.body);
    return res.send(user);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
};
