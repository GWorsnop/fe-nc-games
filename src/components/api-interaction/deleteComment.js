import axios from "axios";

export default function deleteComment(comment_id) {
  return axios
    .delete(
      `https://nc-games-gworsnop.herokuapp.com/api/comments/${comment_id}/`
    )
    .then((res) => {
      return res.data;
    });
}
