"use client";

import Link from "next/link";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import "./Order.css";

function Order() {
  const selectBasketItems = useSelector(
    (state) => state.selectBasketItems.selectBasketItems
  );

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
                  </div>
                  <div className="order-product-item-quantity">
                    <div className="quantity-number">1</div>
                  </div>
                  <div className="order-product-item-total">
                    <p>${item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="order-delivery">
            <h2>Delivery method</h2>
            <div className="order-delivery-address">
              <div className="order-delivery-address-title">
                <span>Address</span>
              </div>
              <div className="order-delivery-address-input">
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="order-paymentDetails">
            <div className="order-payment">
              <div className="order-paymentDetails-title">
                <h2>Payment method</h2>
              </div>
              <div className="order-payment-options">
                <label>
                  <div className="order-payment-options-item">
                    <input type="radio" name="payment" />
                    <span>Cash</span>
                  </div>
                </label>
                <label>
                  <div className="order-payment-options-item">
                    <input type="radio" name="payment" />
                    <img src="../image/cards.svg" alt="Image" />
                  </div>
                </label>
                <label>
                  <div className="order-payment-options-item">
                    <input type="radio" name="payment" />
                    <img src="../image/idram.svg" alt="Image" />
                  </div>
                </label>
              </div>
            </div>
            <div className="order-details">
              <div className="order-paymentDetails-title">
                <h2>My details</h2>
              </div>
              <div className="order-details-description">
                <img src="../image/user.png" alt="Image" />
                <span>John,+374 11 111 111</span>
              </div>
            </div>
          </div>
        </div>
        <div className="order-content-right">
          <span>Product {0} pieces</span>
          <div className="order-total">
            <span>Total</span>
            <span>0 $</span>
          </div>
          <div className="order-buy">
            <Modal className="order-buy-button"/>
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
