import CartSVG from "./SVG/CartSVG";
import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const addedItems = useSelector((state) => state.cart.items);
  console.log(addedItems);
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
      <Link to="/cart" className="header-right">
        <button className="button-1">
          <span>
            {addedItems.reduce((acc, item) => acc + item.price * item.count, 0)}{" "}
            ₽
          </span>
        </button>
        <button className="button-2">
          <CartSVG />
          <span>{addedItems.reduce((acc, item) => acc + item.count, 0)} </span>
        </button>
      </Link>
    </header>
  );
}
export default Header;
