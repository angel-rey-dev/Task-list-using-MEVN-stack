import server from "./server";
import { startConnection } from "./database";

const port = process.env.PORT || 4000;

// Start the database connection
startConnection();

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

