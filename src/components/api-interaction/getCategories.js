import axios from "axios";

export default function getCategories() {
  return axios
    .get(`https://nc-games-backend-nfl0.onrender.com/api/categories`)
    .then((res) => {
      return res.data.categories;
    });
}
