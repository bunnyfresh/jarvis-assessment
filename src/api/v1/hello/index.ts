import express from "express";
import { index , postIndex } from "./controller";
const router = express.Router();

router.get("/", index);
router.post("/", postIndex);

export const helloRouter = router;
