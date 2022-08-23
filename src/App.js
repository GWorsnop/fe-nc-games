import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./components/UserContext";
import Header from "./components/Header";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Categories from "./components/Categories";
import SingleCategory from "./components/SingleCategory";
import SingleReview from "./components/SingleReview";

function App() {
  const [user, setUser] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="app min-h-screen bg-gradient-to-b from-gray-300 to-gray-500">
          <Header />
          <br />
          <Routes>
            <Route path="/" element={<About />}></Route>
            <Route path="/reviews" element={<Reviews />}></Route>
            <Route path="/categories" element={<Categories />}></Route>
            <Route
              path="/reviews/:category_slug"
              element={<SingleCategory />}
            />
            <Route path="/reviews/id/:review_id" element={<SingleReview />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
