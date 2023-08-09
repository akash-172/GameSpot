import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1d21ff14fd1344fda3ce3374fc9f474e",
  },
});
