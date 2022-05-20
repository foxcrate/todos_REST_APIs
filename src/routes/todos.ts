import { Router } from "express";
import todoController from "../controllers/todo";

let router = Router();

router.get("/", todoController.getAll);

router.get("/:todoId", todoController.get);

router.post("/", todoController.post);

router.put("/:todoId", todoController.update);

router.delete("/:todoId", todoController.delete);

export default router;
