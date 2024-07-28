import { getAllUsers } from "./users.service";
import { Request, Response } from "express";

export const getUserController = async (req: Request, res: Response) => {
  res.send("Hello Worlds");
  try {
    const data = await getAllUsers();
    console.log(data);
  } catch (err) {
    console.log("error", err);
  }
};
