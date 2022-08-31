import getUsers from "./api-interaction/getUsers";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import Loading from "./Loading";

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
          <h3 className="text-2xl text-center">Users</h3>
          <br />
          <div className="flex justify-center">
            <Loading />
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div>
        <h3 className="text-2xl text-center">Users</h3>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
          {allUsers.map((user, i) => {
            return (
              <div
                key={user.username}
                className="w-60 bg-teal-200 rounded-md shadow-md mb-4 text-center"
              >
                <h3 className="text-xl font-semibold text-black text-center">
                  {user.name}
                </h3>
                <h3 className="text-l font-semibold text-black text-center">
                  <i>{user.username}</i>
                </h3>
                <img
                  className="profile m-auto max-h-20 border-2 rounded-md border-teal-500"
                  src={user.avatar_url}
                  alt={user.username}
                />
                <div className="flex justify-center">
                  <Link to={`/`}>
                    <button
                      className="btn bg-white hover:bg-teal-500 text-black text-xs m-auto"
                      onClick={() => setUser(user)}
                    >
                      Choose User
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default Users;
