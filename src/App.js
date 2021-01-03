import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Slider from "./components/Slider";
import Login from './components/login/Login';
import Product from './components/products/Products';
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
          <Route path="/" exact={true}>
            {/*Bottom one is the default Route */}
            <Navbar toggleCategory={toggleCategory} />

            <Home isCategoryToggled={isCategoryToggled} />
          </Route>

          <Route path="/login" exact={true}>
            <Login />
          </Route>

          <Route path="/products" exact={true}>
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
