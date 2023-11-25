import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c5ee40e1cf02435c8cb1adf57607f962",
  },
});
