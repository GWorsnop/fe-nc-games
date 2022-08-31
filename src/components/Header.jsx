import { useContext } from "react";
import { UserContext } from "./UserContext";
import HeaderNavBar from "./HeaderNavBar";

function Header() {
  const { user } = useContext(UserContext);

  return (
    <header className="bg-teal-500 w-screen sticky top-0">
      <br />
      <div className="grid grid-cols-2 pb-2">
        <h1 className="text-3xl sm:text-4xl text-black font-semibold pl-5">
          NC-Games
        </h1>
        <div className="flex justify-end align">
          <img
            className="h-10 w-10 rounded-full object-right"
            src={user.avatar_url}
            alt={user.username}
          />
          <div className="pl-2 pb-2">
            <HeaderNavBar />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
