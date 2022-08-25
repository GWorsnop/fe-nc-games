import { useContext } from "react";
import { UserContext } from "./UserContext";
import HeaderNavBar from "./HeaderNavBar";

function Header() {
  const { user } = useContext(UserContext);

  return (
    <header className="bg-teal-400 w-screen">
      <br />
      <div className="flex justify-between">
        <div className="flex-col">
          <h1 className="text-4xl text-black font-semibold pl-5 ">NC-Games</h1>
          <h2 className="text-2xl text-black pl-5 pb-5">
            An online community for board games
          </h2>
        </div>
        <div className="flex flex-row px-2">
          <div className="px-2">
            <img
              className="h-12 w-12 rounded-full object-center"
              src={user.avatar_url}
              alt={user.username}
            />
          </div>
          <HeaderNavBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
