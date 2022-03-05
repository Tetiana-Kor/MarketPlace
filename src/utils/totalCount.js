const totalCount = (basket) => {
  return basket.reduce((total, currItem) => total + currItem.count, 0);
};

export default totalCount;
