import axios from "axios";

export default function getReviews() {
  return axios.get(`http://54.86.179.94:8080/api/events`).then((res) => {
    console.log(res.data.events);
    return res.data.events;
  });
}

getReviews();
