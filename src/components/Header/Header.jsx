import React from "react";
import "./Header.css";

const Header = ({ setShowLogin }) => {
  return (
    <div className="header" id="home">
      <div className="header-contents">
        <h2>Order your desired food here</h2>
        <p>
          Browse our menu to find the perfect dish for any craving. Enjoy speedy
          service and a variety of delicious options, all from the comfort of
          your home. Satisfy your hunger with just a few clicks!{" "}
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
