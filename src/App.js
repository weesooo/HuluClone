import React from "react";
import "./App.css";
import "./assests/Header.js";
import Header from "./assests/Header.js";
import Navigation from "./assests/Navigation.js";
import Movies from "./assests/Movies";
import { useState } from "react";
import requests from "./assests/requests.js";
// Tech ---> Material UI | TMDB API endpoints | React Hooks State, Effect | Flexbox (CSS)
function App() {
  const [SelectedCategory, setSelectedCategory] = useState(requests.getHot);
  return (
    <div className="app">
      {/* Header Componenet */}

      <Header />

      {/* Navigation Componenet */}

      <Navigation setSelectedCategory={setSelectedCategory} />

      {/* Movie Results Componenet*/}

      <Movies SelectedCategory={SelectedCategory} />
    </div>
  );
}

export default App;
