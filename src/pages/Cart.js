import CheckMark from "./Cart-SVG/Сheck-markSVG.js";
import BinSVG from "./Cart-SVG/BinSVG.js";
import { useSelector, useDispatch } from "react-redux";
import ItemCart from "../components/ItemCart/ItemCart.js";
import {
  clearCart,
  setTotalPrice,
  setTotalCount,
} from "../redux/slices/cart.js";
import { Link } from "react-router-dom";

function Cart() {
  const { itemsCart, totalPrice, totalCount } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  return (
    <>
      {itemsCart.length ? (
        <div className="cart">
          <div className="top">
            <div className="title">
              <img src="./images/cart/cart.svg" alt="" />
              <h1>Корзина</h1>
            </div>
            <button
              onClick={() => {
                dispatch(clearCart());
                dispatch(setTotalPrice());
                dispatch(setTotalCount());
              }}
            >
              <BinSVG />
              <span>Очистить корзину</span>
            </button>
          </div>
          <section className="cart-list">
            <section className="list-pizzas">
              {itemsCart.map((item, index) => {
                return <ItemCart {...item} index={index} key={index} />;
              })}
            </section>
          </section>
          <div className="bottom">
            <div className="info">
              <div className="count-pizzas">
                <span>
                  Всего пицц: <b>{totalCount} шт.</b>
                </span>
              </div>
              <div className="sum-total">
                <span>
                  Сумма заказа: <b>{totalPrice} ₽</b>
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
      ) : (
        <div className="cart-empty">
          <h1>Корзина пустая 😕</h1>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы
            заказать пиццу, перейди на главную страницу.
          </p>
          <img src="./images/cart/cart-empty.png" alt="" />
          <Link to="/">
            <button>Вернуться назад</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Cart;
