import axios from "./axios";
import { AxiosResponse } from "axios";
import { Task } from "@/interfaces/Task";

export const getTasks = async (): Promise<AxiosResponse<Task[]>> =>
  await axios.get("/tasks");

export const getTask = async (id: string): Promise<AxiosResponse<Task>> =>
  await axios.get(`/tasks/${id}`);

export const createTask = async (task: Task): Promise<AxiosResponse> =>
  await axios.post("/tasks", task);

export const updateTask = async (
  id: string,
  updatedTask: Task
): Promise<AxiosResponse<Task>> => await axios.put(`/tasks/${id}`, updatedTask);

export const deleteTask = async (id: string): Promise<AxiosResponse> =>
  await axios.delete(`/tasks/${id}`);
