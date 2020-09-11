import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-98e52/us-central1/api", // Api (cloud fn) URL
});
export default instance;
