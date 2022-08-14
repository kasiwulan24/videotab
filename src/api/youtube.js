import axios from "axios";
const API_KEY = "AIzaSyB1NhkPwwKY4YcWuZYCtTfqBPLRQG6yKf8";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: API_KEY,
  },
});
