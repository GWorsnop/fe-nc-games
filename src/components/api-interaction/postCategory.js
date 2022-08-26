import axios from "axios";

export default function postCategory(slug, description) {
  return axios
    .post(`https://nc-games-gworsnop.herokuapp.com/api/categories`, {
      slug,
      description,
    })
    .then((res) => {
      return res.data.category;
    });
}
