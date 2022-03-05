const totalPrice = (basket) => {
  return basket.reduce(
    (total, currItem) => total + currItem.price * currItem.count,
    0
  );
};

export default totalPrice;
