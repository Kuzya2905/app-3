import PlusSVG from "./SVG/PlusSVG";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/Cart";

function Card({ title, price, imageUrl, types, sizes, id }) {
  const [count, setCount] = React.useState(0);
  const [sizeActivePizza, setSizePizza] = React.useState(0);
  const [typeActivePizza, setTypePizza] = React.useState(types[0]);
  const typeNames = ["тонкое", "традиционное"];
  const dispatch = useDispatch();

  return (
    <div className="pizza-card">
      <img src={imageUrl} alt="" />
      <h2>{title}</h2>
      <div className="info">
        <div className="thickness">
          {types.map((typeId, index) => {
            return (
              <button
                onClick={() => {
                  setTypePizza(index);
                }}
                className={typeActivePizza === index ? "active" : ""}
                key={index}
              >
                {typeNames[typeId]}
              </button>
            );
          })}
        </div>
        <div className="sizes">
          {sizes.map((size, index) => {
            return (
              <button
                onClick={(e) => {
                  setSizePizza(index);
                }}
                className={sizeActivePizza === index ? "active" : ""}
                key={index}
              >
                {size} см.
              </button>
            );
          })}
        </div>
      </div>
      <div className="info-2">
        <span className="price">от {price} ₽</span>
        <button
          className="add"
          onClick={() => {
            setCount((prev) => prev + 1);
            dispatch(addItem({ title, price, imageUrl, types, sizes, id }));
          }}
        >
          <PlusSVG />
          <span>Добавить</span>
          <span className="count">{count}</span>
        </button>
      </div>
    </div>
  );
}

export default Card;
