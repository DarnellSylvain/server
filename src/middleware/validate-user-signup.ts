import { Request, Response, NextFunction } from "express";
import { CreateUserInput } from "../users/users.schemas";

export const validateUserSignup = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, email, password, passwordConfirmation } = req.body;

  if (password !== passwordConfirmation)
    return res.status(400).send("Passwords do not match");

  if (!email || !password || !name) {
    return res.status(400).json({
      message: "Please provide all user details",
    });
  }

  next();
};
