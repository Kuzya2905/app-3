import PlusSVG from "./SVG/PlusSVG";
import React from "react";
import { useDispatch } from "react-redux";
import { addItem, setTotalPrice, setTotalCount } from "../../redux/slices/cart";
import { Link } from "react-router-dom";

function Card({ title, price, imageUrl, types, sizes, id }) {
  const [count, setCount] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const [activeType, setActiveType] = React.useState(types[0]);
  const typeNames = ["тонкое", "традиционное"];
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setTotalPrice());
    dispatch(setTotalCount());
  }, [count, dispatch]);

  return (
    <div className="pizza-card">
      <Link to={`/pizza/${id}`}>
        <img src={imageUrl} alt="" />
        <h2>{title}</h2>
      </Link>
      <div className="info">
        <div className="thickness">
          {types.map((typeId, index) => {
            return (
              <button
                onClick={() => {
                  setActiveType(index);
                }}
                className={activeType === types[index] ? "active" : ""}
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
                  setActiveSize(index);
                }}
                className={activeSize === index ? "active" : ""}
                key={index}
              >
                {size} см.
              </button>
            );
          })}
        </div>
      </div>
      <div className="info-2">
        <span className="price">
          {" "}
          {activeSize === 0
            ? price
            : activeSize === 1
            ? Math.round(price * 1.3)
            : Math.round(price * 1.6)}{" "}
          ₽
        </span>
        <button
          className="add"
          onClick={() => {
            setCount((prev) => prev + 1);
            dispatch(
              addItem({
                title,
                price,
                imageUrl,
                types: types[activeType],
                sizes: sizes[activeSize],
                id,
              })
            );
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
