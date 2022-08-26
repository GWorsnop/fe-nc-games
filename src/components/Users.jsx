import getUsers from "./api-interaction/getUsers";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

function Users() {
  const [allUsers, setAllUsers] = useState([]);
  const { setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUsers().then((data) => {
      setAllUsers(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="m-auto">
        <div>
          <h3 className="text-xl font-bold"> Choose your user: </h3>
          <br />
          <div>
            <p className="loader"></p>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div>
        <h3 className="text-xl font-bold"> Choose your user: </h3>
        <br />
        <div className="grid gap-4 grid-cols-3 grid-rows-2 justify-items-center">
          {allUsers.map((user, i) => {
            return (
              <div
                key={user.username}
                className="w-60 bg-slate-400 rounded-md shadow-md mb-4"
              >
                <h3 className="text-xl font-semibold text-black">
                  {user.name}
                </h3>
                <h3 className="text-l font-semibold text-black">
                  <i>{user.username}</i>
                </h3>
                <img
                  className="profile m-auto max-h-20 "
                  src={user.avatar_url}
                  alt={user.username}
                />
                <Link to={`/`}>
                  <button
                    className="btn bg-white hover:bg-green-100 text-black text-xs"
                    onClick={() => setUser(user)}
                  >
                    Choose User
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default Users;
