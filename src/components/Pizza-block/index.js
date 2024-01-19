import React from "react";

import ItemContentLoader from "../Item-content-loader";
import Card from "../Card";
import { AppHomeContext } from "../../Context";
import { useSelector } from "react-redux";

function PizzaBlock() {
  const { currentItems } = React.useContext(AppHomeContext);
  const { status } = useSelector((state) => state.pizzaSlice);
  return (
    <div className="pizza-cards">
      {status === "loading" ? (
        [...new Array(10)].map((item, index) => (
          <ItemContentLoader key={index} />
        ))
      ) : status === "error" ? (
        <div>Ошибка</div>
      ) : (
        currentItems.map((item) => {
          return <Card {...item} key={item.id} />;
        })
      )}
    </div>
  );
}

export default PizzaBlock;
