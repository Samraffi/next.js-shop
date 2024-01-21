const getUpdatedBasketItems = (data, product) => {
  const existingBasketItem = data.find(({ id }) => id === product.id);

  if (existingBasketItem) {
    return data.map((BasketItem) =>
      BasketItem.id === product.id
        ? { ...BasketItem, quantity: BasketItem.quantity + 1 }
        : BasketItem
    );
  }

  return [...data, { ...product, quantity: 1 }];
}

export default getUpdatedBasketItems;