import { Request, Response } from "express";

export const createUserHandler = async (req: Request, res: Response) => {
  console.log(req.body);
  res.send("You're trying to create a user?");
};
