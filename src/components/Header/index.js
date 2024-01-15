import CartSVG from "./SVG/CartSVG";
import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import { Route, Routes } from "react-router-dom";
import AppContext from "../../Context";

function Header() {
  const { urlLocationSearch } = React.useContext(AppContext);
  return (
    <header>
      <a href={`/${urlLocationSearch}`} className="header-left">
        <img src="images/header/Logo.png" alt="" />
        <div className="info">
          <h1>REACT PIZZA</h1>
          <span>самая вкусная пицца во вселенной</span>
        </div>
      </a>
      <Routes>
        <Route path="/" element={<Search />}></Route>
      </Routes>
      <Link to="/cart" className="header-right">
        <button className="button-1">
          <span>520 ₽</span>
        </button>
        <button className="button-2">
          <CartSVG />
          <span>3</span>
        </button>
      </Link>
    </header>
  );
}
export default Header;
