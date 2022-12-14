import axios from "axios";

// const KEY = "AIzaSyDH5JRIpZg_owk1Ff6m2sA4_pJFqU6vQTg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
});
