import { Router } from "express";
import { createUserHandler } from "./users.controller";
import validate from "src/middleware/validatedResource";
import { createUserSchema } from "./users.schemas";

const router = Router();

router.post("/signup", validate(createUserSchema), createUserHandler);

export default router;
