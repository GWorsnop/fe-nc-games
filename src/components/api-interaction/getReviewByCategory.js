import axios from "axios";

export default function getReviewByCategory(category) {
  return axios
    .get(`https://nc-games-backend-nfl0.onrender.com/api/reviews`, {
      params: { category, limit: 100 },
    })
    .then((res) => {
      return res.data.reviews;
    });
}
