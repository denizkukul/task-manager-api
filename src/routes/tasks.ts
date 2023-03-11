import express = require("express");
import { getAllTasks, getTask, deleteTask, createTask, updateTask } from "../controllers/tasks";

const router = express.Router();

router.route("/").get(getAllTasks);

router.route("/").post(createTask);

router.route("/:id").get(getTask);

router.route("/:id").delete(deleteTask);

router.route("/:id").patch(updateTask)

export default router;