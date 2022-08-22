import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./components/UserContext";
import Header from "./components/Header";
import About from "./components/About";
import Reviews from "./components/Reviews";

function App() {
  const [user, setUser] = useState({
    username: "Guest",
    avatar_url:
      "https://images.macrumors.com/t/n4CqVR2eujJL-GkUPhv1oao_PmI=/1600x/article-new/2019/04/guest-user-250x250.jpg",
    kudos: 0,
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
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
