import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

import {
  FaSortDown,
  FaUserCircle,
  FaSearchLocation,
  FaBtc,
  FaShoppingBasket,
  FaAlignRight,
  FaArrowRight,
  FaSearch,
} from "react-icons/fa";

const Navbar = ({ toggleCategory }) => {
  const [isToggled, setisToggled] = useState(false);

  const toggleNavigation = () => {
    setisToggled(!isToggled);
    console.log("Clicked me");
    console.log(isToggled);
  };

  const toggleCat = () => {
    toggleCategory();
  };

  return (
    <nav className="header">
      {/*Logo on theh left -> Image  */}
      <button onClick={toggleCat} className="toggle__category">
        <FaAlignRight
          style={{ marginTop: "10px", color: "white", fontSize: "30px" }}
        />
      </button>
      <Link to="/">
        <img
          className="header__logo"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsandiego.surfrider.org%2Fwp-content%2Fuploads%2F2016%2F01%2FYourLogoHere.png&f=1&nofb=1"
          alt=""
        />
      </Link>

      {/* Search Box */}

      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search Products by title,category,etc."
        />
        <button className="header__searchIcon">
          <FaSearch />
        </button>

        <button className="toggle__navigation" onClick={toggleNavigation}>
          {isToggled === true ? (
            <FaArrowRight
              style={{ marginTop: "10px", color: "white", fontSize: "30px" }}
            />
          ) : (
            <FaAlignRight
              style={{ marginTop: "10px", color: "white", fontSize: "30px" }}
            />
          )}
        </button>
      </div>
      {/*  Links */}
      <div
        className={isToggled === true ? "header__nav-mobile" : "header__nav"}
      >
        {/* Link 1 */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLine1">
              Sign-in <FaSortDown />{" "}
            </span>
            <span className="header__optionLine2">
              <span>
                Account <FaUserCircle />
                {"  "}
              </span>
            </span>
          </div>
        </Link>

        {/* Link 2 */}

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLine1">
              Track <FaSortDown />{" "}
            </span>
            <span className="header__optionLine2">
              <span>
                Track Order
                {"  "}
                <FaSearchLocation />{" "}
              </span>
            </span>
          </div>
        </Link>

        {/* Link 3 */}

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLine1">
              Special <FaSortDown />{" "}
            </span>
            <span className="header__optionLine2">
              {"  "} Good Deals
              {"  "}
              <FaBtc />
            </span>
          </div>
        </Link>
        {/* Link 4 (Basket Icon) with number */}
        <Link to="/basket" className="header__link">
          <div className="header__option">
            <span className="header__optionLine1">
              Cart <FaSortDown />{" "}
            </span>
            <span className="header__optionLine2 ">
              Your Orders
              <FaShoppingBasket />
              <span className="header__optionBasket">
                <span className="header__basketCount">1</span>
              </span>
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
