import CheckMark from "./Cart-SVG/Сheck-markSVG.js";
import BinSVG from "./Cart-SVG/BinSVG.js";
import { useSelector } from "react-redux";
import ItemCart from "../components/ItemCart/ItemCart.js";

import { Link } from "react-router-dom";

function Cart() {
  const { items } = useSelector((state) => state.cart);
  console.log(items);

  return (
    <div className="cart">
      <div className="top">
        <div className="title">
          <img src="./images/cart/cart.svg" alt="" />
          <h1>Корзина</h1>
        </div>
        <button>
          <BinSVG />
          <span>Очистить корзину</span>
        </button>
      </div>
      <section className="cart-list">
        <section className="list-pizzas">
          {items.map((item) => {
            console.log(item);
            return <ItemCart {...item} key={item.id} />;
          })}
        </section>
      </section>
      <div className="bottom">
        <div className="info">
          <div className="count-pizzas">
            <span>
              Всего пицц: <b>3 шт.</b>
            </span>
          </div>
          <div className="sum-total">
            <span>
              Сумма заказа: <b>900 ₽</b>
            </span>
          </div>
        </div>
        <div className="buttons">
          <Link to="/">
            <button className="button-back">
              <CheckMark />
              <span>Вернуться назад</span>
            </button>
          </Link>
          <button className="payment">Оплатить сейчас</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
