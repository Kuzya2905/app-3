import React from "react";

import ItemContentLoader from "../Item-content-loader";
import Card from "../Card";
import AppContext from "../../Context";

function PizzaBlock() {
  const { currentItems, loadingItems } = React.useContext(AppContext);
  return (
    <div className="pizza-cards">
      {loadingItems
        ? [...new Array(10)].map((item, index) => (
            <ItemContentLoader key={index} />
          ))
        : currentItems.map((item) => <Card {...item} key={item.id} />)}
    </div>
  );
}

export default PizzaBlock;
