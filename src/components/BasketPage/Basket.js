"use client";

import { useSelector } from "react-redux";
import "./Basket.css";

function Basket () {
  const selectBasketItems = useSelector((state) => state.selectBasketItems.selectBasketItems);

  console.log(selectBasketItems);
  const count = selectBasketItems.reduce(
    (acc, basketItem) => acc + (basketItem.quantity ? basketItem.quantity : 1),
    0
  );

  return (
    <div className="basket">
      <div className="basket-menu opened">
        {selectBasketItems.map((item, index) => {
          return (
            <div className="basket-menu-items" key={item.id}>
              <div className="basket-menu-item">
                <img src={item.images[0]} alt={item.images[0]} />
                <div className="basket-menu-item-description">
                  <h2>count: {item.quantity}</h2>
                  <h2>{item.title}</h2>
                  <p>${item.price}</p>
                  <button>Buy</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <img
        src="/image/basket1.png"
        alt="Basket"
        className="basket-img"
      />
      <div className="calc">{count}</div>
    </div>
  );
}

export default Basket;
