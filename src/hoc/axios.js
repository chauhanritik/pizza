import axios from "axios";

const instance = axios.create({
  baseURL: "http://13.233.123.130",
});

export default instance;
