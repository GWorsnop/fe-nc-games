import axios from "axios";

export default function getReviews() {
  return axios
    .get(`https://nc-games-backend-nfl0.onrender.com/api/events`)
    .then((res) => {
      console.log(res.data.events);
      return res.data.events;
    });
}

getReviews();
