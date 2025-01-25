import { Router } from "express";
import { sendEmailController } from "@/controllers";

const router = Router();

router.post("/api/send", sendEmailController);

export default router;