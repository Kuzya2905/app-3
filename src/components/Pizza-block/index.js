import React from "react";

import ItemContentLoader from "../Item-content-loader";
import Card from "../Card";
import { AppHomeContext } from "../../Context";

function PizzaBlock() {
  const { currentItems, loadingItems } = React.useContext(AppHomeContext);
  return (
    <div className="pizza-cards">
      {loadingItems
        ? [...new Array(10)].map((item, index) => (
            <ItemContentLoader key={index} />
          ))
        : currentItems.map((item) => {
            return <Card {...item} key={item.id} />;
          })}
    </div>
  );
}

export default PizzaBlock;
