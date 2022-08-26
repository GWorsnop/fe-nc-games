import axios from "axios";

export default function postReview(owner, title, body, designer, category) {
  return axios
    .post(`https://nc-games-gworsnop.herokuapp.com/api/reviews`, {
      owner,
      title,
      review_body: body,
      designer,
      category,
    })
    .then((res) => {
      return res.data.review;
    });
}
