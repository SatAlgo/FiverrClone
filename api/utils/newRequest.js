import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:8800/api", // Change this to your actual backend URL
  withCredentials: true, // Only if you're using cookies for auth
});

export default newRequest;
