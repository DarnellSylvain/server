import { Router } from "express";
import { getUserController } from "./user-controller";

const router = Router();

router.get("", getUserController);

export default router;
