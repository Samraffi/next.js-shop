"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import "./order.css";

function Order() {
  const selectBasketItems = useSelector((state) => state.selectBasketItems.selectBasketItems);

  return (
    <div className="order">
      <div>
        <Link href="/">GoTo</Link>
      </div>
      <div className="order-content">
        <div className="order-content-left">
          <div className="order-product">
            <h2>Basket</h2>
            {selectBasketItems.map((item, index) => {
              return (
                <div className="order-product-item" key={index}>
                  <div className="order-product-item-img">
                    <img src={item.images[0]} alt="Image" />
                  </div>
                  <div className="order-product-item-description">
                    <h2>{item.title}</h2>
                    <p>${item.price}</p>
                  </div>
                  <div className="order-product-item-quantity">
                    <div className="quantity-add">-</div>
                    <div className="quantity-number">1</div>
                    <div className="quantity-remove">+</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="order-delivery"></div>
          <div className="order-PaymentDetails">
            <div className="order-payment"></div>
            <div className="order-details"></div>
          </div>
        </div>
        <div className="order-content-right">
          <span>Product {0} pieces</span>
          <div className="order-total">
            <span>Total</span>
            <span>0 $</span>
          </div>
          <div className="order-buy">
            <button className="order-buy-button">Order</button>
          </div>
          <div className="order-convention">
            <span>
              <input type="checkbox" name="convention" />
            </span>
            <span>
              I agree with the rules for using the trading platform and
              returning
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
