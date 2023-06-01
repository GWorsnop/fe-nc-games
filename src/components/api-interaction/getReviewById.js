import axios from "axios";

export default function getReviewById(review_id) {
  return axios
    .get(`https://nc-games-backend-nfl0.onrender.com/api/reviews/${review_id}`)
    .then((res) => {
      return res.data.review;
    });
}
