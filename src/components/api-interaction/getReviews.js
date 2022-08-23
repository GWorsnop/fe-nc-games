import axios from "axios";

export default function getReviews({ category, sort_by, order, limit, p }) {
  return axios
    .get(`https://nc-games-gworsnop.herokuapp.com/api/reviews`, {
      params: { category, sort_by, order, limit, p },
    })
    .then((res) => {
      return res.data.reviews;
    });
}
