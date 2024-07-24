import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin, hideMenuLink = false }) => {
  const [menu, setMenu] = useState("Home");
  const [navbarColor, setNavbarColor] = useState("transparent");
  const [isActive, setIsActive] = useState(true);
  const { getTotalCartAmount } = useContext(StoreContext);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      scrollPosition > 300
        ? setNavbarColor("#000000")
        : setNavbarColor("transparent");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e) => {
    setIsActive((current) => !current);
  };
  return (
    <div className="navbar" style={{ backgroundColor: navbarColor }}>
      <Link to="/bhojan/">
        <img className="logo" src="./bhojan-logo.png" alt="" />
      </Link>
      
      <ul className="navbar-menu">
        <Link to="/bhojan/">
          <a
            href="#home"
            onClick={() => {
              setMenu("Home");
            }}
            className={menu === "Home" ? "active" : ""}
          >
            Home
          </a>
        </Link>
        {!hideMenuLink && (
        <a
          href="#explore-menu"
          onClick={() => {
            setMenu("Menu");
          }}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
      )}
        <a
          href="#footer"
          onClick={() => {
            setMenu("Contact-us");
          }}
          className={menu === "Contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
    
      <div onClick={handleClick} className="hamburger-menu">
        <img src={isActive ? assets.menu_icon : assets.cross_icon_2} alt="" />
      </div>
      <div className={isActive ? "hamburger-false" : "hamburger-content"}>
        <ul className="hamburger-navbar-menu">
          <Link
            to="/bhojan/"
            onClick={() => {
              setMenu("Home");
            }}
            className={menu === "Home" ? "active" : ""}
          >
            Home
          </Link>
          {!hideMenuLink && (
          <a
            href="#explore-menu"
            onClick={() => {
              setMenu("Menu");
            }}
            className={menu === "Menu" ? "active" : ""}
          >
            Menu
          </a>
          )}
          <a
            href="#footer"
            onClick={() => {
              setMenu("Contact-us");
            }}
            className={menu === "Contact-us" ? "active" : ""}
          >
            Contact Us
          </a>
          <button
            onClick={() => {
              setShowLogin(true);
            }}
          >
            Sign in
          </button>
        </ul>
      </div>
      <div className="navbar-right">
        <img className="searchIcon" src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            {" "} 
            <img className="basketIcon" src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
