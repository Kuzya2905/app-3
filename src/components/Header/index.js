import CartSVG from "./SVG/CartSVG";
import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { totalPrice, totalCount } = useSelector((state) => state.cart);

  const location = useLocation();

  return (
    <header>
      <a
        href="/?urlParameterSort=rating&urlParameterFilter=&currentPage=1"
        className="header-left"
      >
        <img src="images/header/Logo.png" alt="" />
        <div className="info">
          <h1>REACT PIZZA</h1>
          <span>самая вкусная пицца во вселенной</span>
        </div>
      </a>
      <Routes>
        <Route path="/" element={<Search />}></Route>
      </Routes>
      {location.pathname !== "/cart" ? (
        <Link to="/cart" className="header-right">
          <button className="button-1">
            <span>{totalPrice} ₽</span>
          </button>
          <button className="button-2">
            <CartSVG />
            <span>{totalCount} </span>
          </button>
        </Link>
      ) : (
        ""
      )}
    </header>
  );
}
export default Header;
