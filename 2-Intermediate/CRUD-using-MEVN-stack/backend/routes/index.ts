import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    console.log(tasks);
    res.status(200).json("/tasks: " + JSON.stringify(tasks));
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).send("Task not found");
    res.status(200).json("/task/:id " + JSON.stringify(task));
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/tasks", (req, res) => {
  try {
    const task = new Task(req.body);
    task.save();
    res.status(201).json("post task: " + task);
  } catch (error) {}
});

router.put("/tasks/:id", async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedTask) return res.status(404).send("Task not found");
    res.status(200).json("put task: " + updatedTask);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).send("Task not found");
    res.status(200).json("delete task: " + task);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
