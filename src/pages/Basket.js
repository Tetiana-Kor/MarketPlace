import React from 'react';
import totalCount from '../utils/totalCount';
import totalPrice from '../utils/totalPrice';
import s from './Product.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getBasket } from '../redux/Product/product-selectors';
import {
  addProduct,
  removeProduct,
  decreaseProduct,
} from '../redux/Product/basket-slice';

import Button from '../ui-kit/Button/Button';

const Basket = () => {
  const basket = useSelector(getBasket);
  const dispatch = useDispatch();

  const handleRemoveFromBasket = item => {
    dispatch(removeProduct(item));
  };

  const handleAddToBasket = product => {
    dispatch(addProduct(product));
  };

  const handleDecrease = product => {
    dispatch(decreaseProduct(product));
  };

  return (
    <div className={s.basket}>
      {basket.length === 0 ? (
        <h4>Basket is Empty</h4>
      ) : (
        <div>
          <div>
            {basket.map(item => (
              <div key={item.id}>
                <div className={s.basket_item}>
                  <strong>{item.name}</strong>
                  <p> Price: {item.price} $</p>
                  <p>
                    Quantity:{' '}
                    <Button
                      onClick={() => {
                        handleDecrease(item);
                      }}
                    >
                      -
                    </Button>{' '}
                    {item.count}{' '}
                    <Button
                      onClick={() => {
                        handleAddToBasket(item);
                      }}
                    >
                      +
                    </Button>
                  </p>
                  <p>Total: {item.price * item.count} $</p>
                  <Button onClick={() => handleRemoveFromBasket(item)}>
                    Remove from basket
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className={s.total}>
            <div className={s.total_count}>
              <strong>TOTAL COUNT: </strong>
              {totalCount(basket)}
            </div>
            <div>
              <strong>TOTAL PRICE:</strong> {totalPrice(basket)} $
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
