import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();

  // Determine if the current path is "/cart"
  const isCartPage = location.pathname === '/cart';

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      {/* Only render Navbar if it's not the cart page */}
      {!isCartPage && <Navbar setShowLogin={setShowLogin} />}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home setShowLogin={setShowLogin} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
