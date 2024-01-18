import PlusSVG from "./SVG/PlusSVG";
import React from "react";
import { useDispatch } from "react-redux";
import { addItem, setTotalPrice, setTotalCount } from "../../redux/slices/Cart";

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
      <img src={imageUrl} alt="" />
      <h2>{title}</h2>
      <div className="info">
        <div className="thickness">
          {types.map((typeId, index) => {
            return (
              <button
                onClick={() => {
                  setActiveType(index);
                }}
                className={activeType === index ? "active" : ""}
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
        <span className="price">от {price} ₽</span>
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
