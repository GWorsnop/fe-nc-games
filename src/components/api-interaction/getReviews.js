import axios from "axios";

export default function getReviews({ category, sort_by, order, limit, p }) {
  return axios
    .get(`https://nc-games-backend-nfl0.onrender.com/api/reviews`, {
      params: { category, sort_by, order, limit, p },
    })
    .then((res) => {
      return res.data.reviews;
    });
}
