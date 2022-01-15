import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.send("Get all tasks: " + JSON.stringify(tasks));
});

router.get("/tasks/:id", (req, res) => {
  res.send("Get task by id");
});

router.post("/tasks", (req, res) => {
  res.send("Upload a task");
});

router.put("/tasks", (req, res) => {
  res.send("Update task");
});

router.delete("/tasks/:id", (req, res) => {
  res.send("Delete task");
});

export default router;
