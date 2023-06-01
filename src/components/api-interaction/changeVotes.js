import axios from "axios";

export default function changeVotes(review_id, vote) {
  return axios
    .patch(
      `https://nc-games-backend-nfl0.onrender.com/api/reviews/${review_id}`,
      {
        inc_votes: vote,
      }
    )
    .then((res) => {
      return res.data.review;
    })
    .catch((err) => {
      return err;
    });
}
