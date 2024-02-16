"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { selectBasketItems } from "@/store/basketItems/selectReducer";
import getUpdatedBasketItems from "@/helpers/getUpdatedBasketItems";
import useBasketItems from "@/hooks/useBasketItems";
import "./Home.css";
import { useState, useEffect } from "react";
import getProducts from "../../app/products"

function Home () {
  const dispatch = useDispatch();
  const { allBasketElems, selectBasketElems} = useBasketItems();

  const onClickAdd = (product) => {
    const updatedBasketItems = getUpdatedBasketItems(selectBasketElems, product);
    dispatch(selectBasketItems(updatedBasketItems));
  };
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then(data => setProducts(data))
  }, [])
  return (
    <div className="main">
      <div className="container">
        <div className="content">
          {products.map((elem) => (
            <div className="box" key={elem.id}>
              <div className="image-box">
                <img src={elem.images[0]} alt={elem.images[0]} className="image1" />
                <img src={elem.images[2]} alt={elem.images[2]} className="image2" />
              </div>
              <div className="description">
                <h2>{elem.title}</h2>
                <p>${elem.price}</p>
                <button
                  onClick={() => {
                    onClickAdd(elem);
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
