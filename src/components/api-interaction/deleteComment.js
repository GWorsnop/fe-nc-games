import axios from "axios";

export default function deleteComment(comment_id) {
  return axios
    .delete(
      `https://nc-games-backend-nfl0.onrender.com/api/comments/${comment_id}/`
    )
    .then((res) => {
      return res.data;
    });
}
