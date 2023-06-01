import axios from "axios";

export default function getReviews() {
  return axios
    .get(`https://nc-games-backend-nfl0.onrender.com/api/reviews`)
    .then((res) => {
      console.log(res.data.reviews);
      return res.data.reviews;
    });
}

getReviews();
