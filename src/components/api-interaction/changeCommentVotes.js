import axios from "axios";

export default function changeCommentVotes(comment_id, vote) {
  return axios
    .patch(
      `https://nc-games-gworsnop.herokuapp.com/api/comments/${comment_id}`,
      {
        inc_votes: vote,
      }
    )
    .then((res) => {
      return res.data.comment;
    })
    .catch((err) => {
      return err;
    });
}
