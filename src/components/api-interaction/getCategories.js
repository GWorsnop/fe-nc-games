import axios from "axios";

export default function getCategories() {
  return axios
    .get(`https://nc-games-gworsnop.herokuapp.com/api/categories`)
    .then((res) => {
      return res.data.categories;
    });
}
