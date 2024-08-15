import { Request, Response } from "express";
import { CreateUserInput, LoginUserInput } from "./users.schemas";
import { createUser, loginUser } from "./users.service";

export const createUserHandler = async (
  req: Request<object, object, CreateUserInput["body"]>,
  res: Response,
) => {
  const { name, email, password, username } = req.body;

  try {
    const user = await createUser({
      name,
      email,
      password,
      username: username || "",
    });

    if (!user)
      return res.status(409).send("User already exists with this email");

    return res.send(user);
  } catch (e: any) {
    return res.status(409).send(e.message);
  }
};

export const loginUserHandler = async (
  req: Request<object, object, LoginUserInput["body"]>,
  res: Response,
) => {
  const response = await loginUser(req.body);
  res.send(response);
};
