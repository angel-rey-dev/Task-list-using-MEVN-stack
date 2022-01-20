import { connect } from "mongoose";

export const startConnection = async () => {
  try {
    const db = await connect("mongodb+srv://jstyles:001225@mevncrud.qyc8d.mongodb.net/mevncrud?retryWrites=true&w=majority");
    console.log("Database is connected : ", db.connection.name);
  } catch (error) {
    console.log(error);
  }
};
