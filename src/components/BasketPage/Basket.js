"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import "./Basket.css";

function Basket() {
  const selectBasketItems = useSelector(
    (state) => state.selectBasketItems.selectBasketItems
  );

  return (
    <div className="basket">
      <div>
        <Link href="/">GoTo</Link>
      </div>
      <div className="basket-content">
        <div className="basket-content-left">
          <div className="basket-product">
            <h2>Basket</h2>
            {selectBasketItems.map((item, index) => {
              return (
                <div className="basket-product-item" key={index}>
                  <div className="basket-product-item-img">
                    <img src={item.images[0]} alt="Image" />
                  </div>
                  <div className="basket-product-item-description">
                    <h2>{item.title}</h2>
                    <p>${item.price}</p>
                  </div>
                  <div className="basket-product-item-quantity">
                    <div className="quantity-add">-</div>
                    <div className="quantity-number">1</div>
                    <div className="quantity-remove">+</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="basket-delivery"></div>
          <div className="basket-PaymentDetails">
            <div className="basket-payment"></div>
            <div className="basket-details"></div>
          </div>
        </div>
        {/* <div className="basket-content-right">
          <span>Product {0} pieces</span>
          <div className="basket-total">
            <span>Total</span>
            <span>0 $</span>
          </div>
          <div className="basket-buy">
            <button className="basket-buy-button">Basket</button>
          </div>
          <div className="basket-convention">
            <span>
              <input type="checkbox" name="convention" />
            </span>
            <span>
              I agree with the rules for using the trading platform and
              returning
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Basket;


// "use client";

// import { useSelector } from "react-redux";
// import "./Basket.css";

// function Basket () {
//   const selectBasketItems = useSelector((state) => state.selectBasketItems.selectBasketItems);

//   const count = selectBasketItems.reduce(
//     (acc, basketItem) => acc + (basketItem.quantity ? basketItem.quantity : 1),
//     0
//   );

//   return (
//     <div className="basket">
//       <div className="basket-menu opened">
//         {selectBasketItems.map((item, index) => {
//           return (
//             <div className="basket-menu-items" key={item.id}>
//               <div className="basket-menu-item">
//                 <img src={item.images[0]} alt={item.images[0]} />
//                 <div className="basket-menu-item-description">
//                   <h2>count: {item.quantity}</h2>
//                   <h2>{item.title}</h2>
//                   <p>${item.price}</p>
//                   <button>Buy</button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <img
//         src="/image/basket1.png"
//         alt="Basket"
//         className="basket-img"
//       />
//       <div className="calc">{count}</div>
//     </div>
//   );
// }

// export default Basket;
