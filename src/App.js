import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import UserResult from "./pages/UserResult";
import { useState } from "react";
import {  Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <HashRouter>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/search"
          element={<SearchResult searchText={searchText} />}
        />
        <Route path="/user" element={<UserResult />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
