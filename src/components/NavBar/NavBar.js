import React from 'react';
import Navigation from '../Navigation/Navigation';
import totalPrice from '../../utils/totalPrice';
import { useSelector } from 'react-redux';
import { getBasket } from '../../redux/Product/product-selectors';

function NavBar() {
  const basket = useSelector(getBasket);

  return (
    <header>
      <Navigation totalPrice={totalPrice(basket)} />
    </header>
  );
}

export default NavBar;
