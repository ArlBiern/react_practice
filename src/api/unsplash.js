import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    // Please add here your client ID
    Authorization: "Client-ID Add_HERE_YOUR_CLIENT_ID",
  },
});
