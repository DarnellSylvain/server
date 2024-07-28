import { Router } from "express";
import { getUserController } from "./users.controller";

const router = Router();

router.get("", getUserController);

export default router;
