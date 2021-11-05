import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 03e6da1be322632412463af1c364abee8d88e8da45d2db5ed4ad070972fadd2f",
  },
});
