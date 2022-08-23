import axios from "axios";

export default function getUsers() {
  return axios
    .get(`https://nc-games-gworsnop.herokuapp.com/api/users`)
    .then((res) => {
      return res.data.users;
    });
}
