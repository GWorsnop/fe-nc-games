import axios from "axios";

export default function getComments(review_id) {
  return axios
    .get(
      `https://nc-games-gworsnop.herokuapp.com/api/reviews/${review_id}/comments`
    )
    .then((res) => {
      return res.data.comments;
    });
}
