import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src="bhojan-logo.png" alt="" />
          <p>
            At Bhojan, we believe in serving delicious and nutritious meals that
            cater to every taste. Our diverse menu features fresh salads, hearty
            rolls, tempting desserts, and more, all crafted with quality
            ingredients. Whether you’re craving a quick snack or a full meal,
            Bhojan is here to deliver delightful dining experiences with
            exceptional service.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+9779824066201</li>
            <li>comtact@bhojan.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ Bhojan.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
