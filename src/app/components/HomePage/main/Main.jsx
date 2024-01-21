"use client";

import { useState } from "react";
import Basket from "./basket/Basket";
import data from "../../../../../data.json";

import "./main.css";
import Link from "next/link";

function Main() {
  const [basketItems, setBasketItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const onClickAdd = (product) => {
    setBasketItems((currentArrBasketItems) => {
      const existingBasketItem = currentArrBasketItems.find(
        ({ id }) => id === product.id
      );
      if (existingBasketItem) {
        return currentArrBasketItems.map((BasketItem) =>
          BasketItem.id === product.id
            ? { ...BasketItem, quantity: BasketItem.quantity + 1 }
            : BasketItem
        );
      }

      return [...currentArrBasketItems, { ...product, quantity: 1 }];
    });
  };

  return (
    <div className="main">
      <div className="goTo">
        <Link href="/about">GoTo</Link>
      </div>
      <Basket
        basketItems={basketItems}
        cartOpened={cartOpened}
        setCartOpened={setCartOpened}
      />
      <div className="container">
        <div className="content">
          {data.map(({ title, images, id, price }) => (
            <div className="box" key={id}>
              <a href="#">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={images[0]} alt="Image" className="image1" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={images[2]} alt="Image" className="image2" />
              </a>
              <div className="description">
                <h2>{title}</h2>
                <p>${price}</p>
                <button
                  onClick={() => {
                    onClickAdd({ title, images, id, price });
                  }}
                >
                  Add to card
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
