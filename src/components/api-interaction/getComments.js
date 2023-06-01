import axios from "axios";

export default function getComments(review_id) {
  return axios
    .get(
      `https://nc-games-backend-nfl0.onrender.com/api/reviews/${review_id}/comments`,
      {
        params: { limit: 100 },
      }
    )
    .then((res) => {
      return res.data.comments;
    });
}
