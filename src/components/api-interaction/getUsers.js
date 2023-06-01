import axios from "axios";

export default function getUsers() {
  return axios
    .get(`https://nc-games-backend-nfl0.onrender.com/api/users`)
    .then((res) => {
      return res.data.users;
    });
}
