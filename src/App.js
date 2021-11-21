import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import E404 from "./containers/E404";
import Home from "./containers/Home";
import Characters from "./containers/Characters";
import Character from "./containers/Character";
import Comics from "./containers/Comics";

import "./App.css";
import "./Responsive.css";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [favorites, setFavorites] = useState({
    comics: JSON.parse(localStorage.getItem("fav-comics")) ?? [],
    characters: JSON.parse(localStorage.getItem("fav-characters")) ?? [],
  });
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home favorites={favorites} setFavorites={setFavorites} />}
        />
        <Route
          path="/characters"
          element={
            <Characters favorites={favorites} setFavorites={setFavorites} />
          }
        />
        <Route
          path="/comics"
          element={<Comics favorites={favorites} setFavorites={setFavorites} />}
        />
        <Route
          path="/character/:id"
          element={
            <Character favorites={favorites} setFavorites={setFavorites} />
          }
        />
        <Route path="*" element={<E404 />} />
      </Routes>
      <Footer />
      <ToastContainer theme="dark" autoClose={3000} />
    </Router>
  );
};

export default App;
