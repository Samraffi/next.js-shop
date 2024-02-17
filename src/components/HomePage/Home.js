"use client";

import { useDispatch } from "react-redux";
import { selectBasketItems } from "@/store/basketItems/selectReducer";
import getUpdatedBasketItems from "@/helpers/getUpdatedBasketItems";
import useBasketItems from "@/hooks/useBasketItems";
import selectBasketItemsToDb from "@/services/selectBasketItems";
import {v4 as uuidv4} from "uuid";

import "./Home.css";

function Home () {
  const dispatch = useDispatch();
  const { allBasketElems, selectBasketElems} = useBasketItems();

  const onClickAdd = (product) => {
    selectBasketItemsToDb({
      buy: false,
      productsId: product.id,
      quantity: product && product.quantity ? product.quantity: 1,
      usersTocken: uuidv4()
    });
    const updatedBasketItems = getUpdatedBasketItems(selectBasketElems, product);
    dispatch(selectBasketItems(updatedBasketItems));
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
    </div>
  );
}

export default Home;
