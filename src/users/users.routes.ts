import { Router } from "express";
import { createUserHandler } from "./users.controller";

const router = Router();

router.post("/signup", createUserHandler);

export default router;
