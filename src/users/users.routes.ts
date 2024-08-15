import { Router } from "express";
import { createUserHandler, loginUserHandler } from "./users.controller";
import validate from "src/middleware/validated-resource";
import { createUserSchema, loginUserSchema } from "./users.schemas";
import { validateUserSignup } from "src/middleware/validate-user-signup";

const router = Router();

router.post(
  "/signup",
  [validate(createUserSchema), validateUserSignup],
  createUserHandler,
);

router.post("/login", validate(loginUserSchema), loginUserHandler);

export default router;
