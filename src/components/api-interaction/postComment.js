import axios from "axios";

export default function postComment(review_id, username, comment) {
  return axios
    .post(
      `https://nc-games-gworsnop.herokuapp.com/api/reviews/${review_id}/comments`,
      {
        username,
        body: comment,
      }
    )
    .then((res) => {
      return res.data.comment;
    });
}
