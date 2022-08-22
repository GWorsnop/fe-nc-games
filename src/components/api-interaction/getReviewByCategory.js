import axios from "axios";

export default function getReviewByCategory(category) {
  return axios
    .get(
      `https://nc-games-gworsnop.herokuapp.com/api/reviews?category=${category}&limit=100`
    )
    .then((res) => {
      return res.data.reviews;
    });
}
