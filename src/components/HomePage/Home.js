"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { allBasketItems } from "../../store/basketItems/allReducer";
import { selectBasketItems } from "../../store/basketItems/selectReducer";
import data from "../../../data.json";
import "./Home.css";

function Home () {
  const dispatch = useDispatch();
  const router = useRouter();
  const allBasketElems = useSelector(
    (state) => state.allBasketItems.allBasketItems
  );
  const selectBasketElems = useSelector(
    (state) => state.selectBasketItems.selectBasketItems
  );

  useEffect(() => {
    dispatch(allBasketItems(data));
  }, []);

  const onClickAdd = (product) => {
    const existingBasketItem = selectBasketElems.find(
      ({ id }) => id === product.id
    );

    if (existingBasketItem) {
      const data = selectBasketElems.map((BasketItem) =>
        BasketItem.id === product.id
          ? { ...BasketItem, quantity: BasketItem.quantity + 1 }
          : BasketItem
      );
      dispatch(selectBasketItems(data));
    } else {
      const data = [...selectBasketElems, { ...product, quantity: 1 }];
      dispatch(selectBasketItems(data));
    }

    router.push("/basket");
  };

  return (
    <div className="main">
      <div className="container">
        <div className="content">
          {allBasketElems.map(({ title, images, id, price }) => (
            <div className="box" key={id}>
              <div className="image-box">
                <img src={images[0]} alt={images[0]} className="image1" />
                <img src={images[2]} alt={images[2]} className="image2" />
              </div>
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
      <button>
        <Link href="/contact">contact</Link>
      </button>
    </div>
  );
}

export default Home;
