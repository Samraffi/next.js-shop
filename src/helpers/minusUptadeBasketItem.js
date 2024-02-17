const minusUptadeBasketItem = (data, product) => {
    const existingBasketItem = data.find(({ id }) => id === product.id);
  
    if (existingBasketItem.quantity > 1) {
      return data.map((BasketItem) =>
        BasketItem.id === product.id
          ? { ...BasketItem, quantity: BasketItem.quantity - 1 }
          : BasketItem
      );
    }
  
    return [...data];
  }
  
  export default minusUptadeBasketItem;