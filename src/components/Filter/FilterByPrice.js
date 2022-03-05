import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMinPrice, setMaxPrice } from '../../redux/Product/filter-slice';
import Button from '../../ui-kit/Button/Button';
import s from './Filter.module.css';

const FilterByPrice = () => {
  const dispatch = useDispatch();
  const [minPrice, setMin] = useState(null);
  const [maxPrice, setMax] = useState(null);

  const onChangeMinPrice = (e) => {
    setMin(e.target.value);
  };

  const onChangeMaxPrice = (e) => {
    setMax(e.target.value);
  };

  const handleFilteredItems = () => {
    dispatch(setMinPrice(minPrice));
    dispatch(setMaxPrice(maxPrice));
  };

  return (
    <div>
      <div className={s.filter}>
        <div className={s.price}>Filter by price...</div>
        <input
          type='number'
          min='0'
          onChange={onChangeMinPrice}
          className={s.input}
        />
        <span>-</span>
        <input
          type='number'
          min='1'
          onChange={onChangeMaxPrice}
          className={s.input}
        />
        <Button onClick={handleFilteredItems}>OK</Button>
      </div>
    </div>
  );
};

export default FilterByPrice;
