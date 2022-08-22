import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Header() {
  const { user } = useContext(UserContext);
  let navigate = useNavigate();

  return (
    <header>
      <br />
      <h1 className="text-4xl text-black font-bold">NC-Games</h1>
      <h2 className="text-2xl text-black font-semibold">
        An online community for board games
      </h2>
      <button className="btn btn-blue" onClick={() => navigate("/")}>
        About
      </button>
      <button className="btn btn-blue" onClick={() => navigate("/reviews")}>
        Reviews
      </button>
    </header>
  );
}

export default Header;
