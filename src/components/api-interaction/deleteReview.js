import axios from "axios";

export default function deleteReview(review_id) {
  return axios
    .delete(`https://nc-games-gworsnop.herokuapp.com/api/reviews/${review_id}/`)
    .then((res) => {
      return res.data;
    });
}
