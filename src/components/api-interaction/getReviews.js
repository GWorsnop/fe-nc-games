import axios from "axios";

export default function getReviews() {
  return axios
    .get(`https://nc-games-gworsnop.herokuapp.com/api/reviews`, {
      params: { limit: 100 },
    })
    .then((res) => {
      return res.data.reviews;
    });
}
