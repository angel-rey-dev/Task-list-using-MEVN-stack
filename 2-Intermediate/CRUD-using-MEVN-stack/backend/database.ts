import { connect } from "mongoose";

export const startConnection = async () => {
  try {
    const db = await connect("mongodb://localhost/task-manager-api");
    console.log("Database is connected : ", db.connection.name);
  } catch (error) {
    console.log(error);
  }
};
