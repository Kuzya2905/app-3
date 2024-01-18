import CheckMark from "./Cart-SVG/Сheck-markSVG.js";
import BinSVG from "./Cart-SVG/BinSVG.js";
import { useSelector, useDispatch } from "react-redux";
import ItemCart from "../components/ItemCart/ItemCart.js";
import {
  clearCart,
  setTotalPrice,
  setTotalCount,
} from "../redux/slices/Cart.js";
import { Link } from "react-router-dom";
import EmptyCart from "../components/EmptyCart/EmptyCart.js";

function Cart() {
  const { items, totalPrice, totalCount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      {items.length ? (
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
              {items.map((item, index) => {
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
        <>Пусто</>
      )}
    </>
  );
}

export default Cart;
