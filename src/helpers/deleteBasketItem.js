const deleteBasketItem = (data, product) => {
    
    return data.filter(({ id }) => id !== product.id);
    // console.log(data.filter(({ id }) => id !== product.id))
  }
  
  export default deleteBasketItem;