import axios from "axios";

const journalApi = axios.create({
  baseURL: "https://my-journal-application-default-rtdb.firebaseio.com",
});

export default journalApi;
