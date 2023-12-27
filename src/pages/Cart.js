import MinusSVG from "./Cart-SVG/MinusSVG.js";
import PlusSVG from "./Cart-SVG/PlusSVG.js";
import DeleteSVG from "./Cart-SVG/DeleteSVG.js";
import CheckMark from "./Cart-SVG/Сheck-markSVG.js";
import BinSVG from "./Cart-SVG/BinSVG.js";

import { Link } from "react-router-dom";

function Cart() {
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
          <div className="pizza">
            <div className="info">
              <img src="./images/cart/pizza.png" alt="" />
              <div className="text">
                <h2>Сырный цыпленок</h2>
                <span>тонкое тесто, 26 см.</span>
              </div>
            </div>
            <div className="count">
              <MinusSVG />
              <span>2</span>
              <PlusSVG />
            </div>
            <div className="price">770 ₽</div>
            <div className="delete">
              <DeleteSVG />
            </div>
          </div>
          <div className="pizza">
            <div className="info">
              <img src="./images/cart/pizza.png" alt="" />
              <div className="text">
                <h2>Сырный цыпленок</h2>
                <span>тонкое тесто, 26 см.</span>
              </div>
            </div>
            <div className="count">
              <MinusSVG />
              <span>2</span>
              <PlusSVG />
            </div>
            <div className="price">770 ₽</div>
            <div className="delete">
              <DeleteSVG />
            </div>
          </div>
          <div className="pizza">
            <div className="info">
              <img src="./images/cart/pizza.png" alt="" />
              <div className="text">
                <h2>Сырный цыпленок</h2>
                <span>тонкое тесто, 26 см.</span>
              </div>
            </div>
            <div className="count">
              <MinusSVG />
              <span>2</span>
              <PlusSVG />
            </div>
            <div className="price">770 ₽</div>
            <div className="delete">
              <DeleteSVG />
            </div>
          </div>
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
