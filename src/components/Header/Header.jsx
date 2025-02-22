import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/imgs/logo.png";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState();

  return (
    <header className="header">
      <div className="header-top">
        <ul className="header-top-left-bar">
          <li className="header-top-left-bar-item">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="header-top-left-bar-item">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="header-top-left-bar-item">
            <NavLink to="/help">Help</NavLink>
          </li>
        </ul>

        <ul className="header-top-right-bar">
          <li className="header-top-right-bar-item">
            <NavLink to="/account">Account</NavLink>
          </li>
          <li className="header-top-right-bar-item">
            <NavLink to="/whichlist">Whichlist</NavLink>
          </li>
        </ul>
      </div>

      <div className="header-center">
        <div className="header-center-left">
          <NavLink className="logo" to="/">
            <h2>FruitShop</h2>
            <img src={logo} alt="logo" />
          </NavLink>
        </div>

        <div className="header-center-center">
          <ul className="header-center-center-navbar">
            <li className="header-center-center-navbar-item">
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="header-center-center-navbar-item">
              <NavLink to="/shop" exact activeClassName="active">
                Shop
              </NavLink>
            </li>
            <li className="header-center-center-navbar-item">
              <NavLink to="/collection" exact activeClassName="active">
                Collection
              </NavLink>
            </li>
            <li className="header-center-center-navbar-item">
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li className="header-center-center-navbar-item">
              <NavLink to="/pages">Pages</NavLink>
            </li>
          </ul>
        </div>

        <div className="header-center-right">
          <div className="header-center-right-searchbar-container">
            <input type="text" placeholder="search our store" />
            <button>
              <span>
                <ion-icon name="search-outline"></ion-icon>
              </span>
            </button>
          </div>

          <ul className="header-center-right-actions-container">
            <li className="header-center-right-action">
              <NavLink to="/account">
                <span>
                  <ion-icon name="person-outline"></ion-icon>
                </span>
              </NavLink>
            </li>
            <li className="header-center-right-action">
              <NavLink to="/cart">
                <span>
                  <ion-icon name="cart-outline"></ion-icon>
                </span>
                <span id="header-center-right-action-cartCount">2</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="header-bottom"></div>
    </header>
  );
};

export default Header;
