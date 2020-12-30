import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Slider from "./components/Slider";
import React, { useState } from "react";

function App() {
  const [isCategoryToggled, setisCategoryToggled] = useState(false);

  const toggleCategory = () => {
    setisCategoryToggled(!isCategoryToggled);
    console.log(isCategoryToggled);
    console.log("Category toggled");
  };

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            {/*Bottom one is the default Route */}
            <Navbar
              toggleCategory={toggleCategory}
              isCategoryToggled={isCategoryToggled}
            />

            <Home isCategoryToggled={isCategoryToggled} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
