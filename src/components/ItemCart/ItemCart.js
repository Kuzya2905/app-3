import React from "react";
import MinusSVG from "./SVG/MinusSVG.js";
import DeleteSVG from "./SVG/DeleteSVG.js";
import PlusSVG from "./SVG/PlusSVG.js";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  setTotalPrice,
  setTotalCount,
  minusCount,
  plusCount,
} from "../../redux/slices/Cart.js";

function ItemCart({ title, count, imageUrl, types, sizes, price, index }) {
  const dispatch = useDispatch();
  const typeNames = ["тонкое", "традиционное"];

  return (
    <div className="pizza">
      <div className="info">
        <img src={imageUrl} alt="" />
        <div className="text">
          <h2>{title}</h2>
          <span>
            {typeNames[types]}, {sizes} см.
          </span>
        </div>
      </div>
      <div className="count">
        <button
          onClick={() => {
            dispatch(minusCount(index));
            dispatch(setTotalPrice());
            dispatch(setTotalCount());
          }}
        >
          <MinusSVG />
        </button>
        <span>{count}</span>
        <button
          onClick={() => {
            dispatch(plusCount(index));
            dispatch(setTotalPrice());
            dispatch(setTotalCount());
          }}
        >
          <PlusSVG />
        </button>
      </div>
      <div className="price">{count * price} ₽</div>
      <div
        className="delete"
        onClick={() => {
          dispatch(deleteItem(index));
          dispatch(setTotalPrice());
          dispatch(setTotalCount());
        }}
      >
        <DeleteSVG />
      </div>
    </div>
  );
}

export default ItemCart;
