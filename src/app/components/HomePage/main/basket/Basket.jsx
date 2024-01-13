import "./basket.css";

function Basket({ basketItems, cartOpened, setCartOpened }) {
  console.log("basketItems", basketItems);
  const count = basketItems.reduce(
    (acc, basketItem) => acc + basketItem.quantity,
    0
  );

  return (
    <div className="basket">
      <div className={`basket-menu ${cartOpened ? "opened" : ""}`}>
        {basketItems.map((item, index) => {
          return (
            <div className="basket-menu-items" key={index}>
              <div className="basket-menu-item">
                <img src={item.images[0]} alt="Image" />
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
        onClick={() => setCartOpened((prev) => !prev)}
      />
      <div className="calc">{count}</div>
    </div>
  );
}

export default Basket;
