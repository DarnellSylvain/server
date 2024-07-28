import { Router } from "express";
import usersRoutes from "./users/user.routes";

const router = Router();

router.use("/users", usersRoutes);

export default router;
