import React from "react";
import MinusSVG from "./SVG/MinusSVG.js";
import DeleteSVG from "./SVG/DeleteSVG.js";
import PlusSVG from "./SVG/PlusSVG.js";

function ItemCart({ title, count, imageUrl }) {
  console.log(imageUrl);
  return (
    <div className="pizza">
      <div className="info">
        <img src={imageUrl} alt="" />
        <div className="text">
          <h2>{title}</h2>
          <span>тонкое тесто, 26 см.</span>
        </div>
      </div>
      <div className="count">
        <MinusSVG />
        <span>{count}</span>
        <PlusSVG />
      </div>
      <div className="price">770 ₽</div>
      <div className="delete">
        <DeleteSVG />
      </div>
    </div>
  );
}

export default ItemCart;
