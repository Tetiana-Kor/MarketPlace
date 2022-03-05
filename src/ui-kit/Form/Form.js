import React from 'react';
import { useForm } from 'react-hook-form';
import { FILTER_COUNTRIES } from '../../utils/const';
import s from './Form.module.css';
import { addNewProduct } from '../../redux/Product/product-operations';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    name: yup.string().required(),
    price: yup.number().positive().integer().required(),
    origin: yup.string().required(),
  })
  .required();

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  const onSumbit = (data) => {
    dispatch(addNewProduct(data));
    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSumbit)}>
      <label className={s.label}>Product</label>
      <input
        {...register('name', {
          required: true,
          minLength: 3,
          maxLength: 20,
        })}
        className={s.input}
      />
      <div>
        {errors?.name && <p>Product should contain min 3 max 20 characters</p>}
      </div>

      <label className={s.label}>Price</label>
      <input
        type='number'
        {...register('price', { required: true, min: 1 })}
        className={s.input}
      />
      <p>{errors?.price && <p>Price should be greater than 1</p>}</p>

      <label className={s.label}>Origin</label>
      <select
        {...register('origin', {
          required: true,
        })}
        className={s.input}
      >
        {FILTER_COUNTRIES.map((item) => (
          <option key={item.value}>{item.value}</option>
        ))}
      </select>
      <p>{errors?.origin && <p>Please choose country</p>}</p>

      <input type='submit' className={s.input} />
    </form>
  );
};

export default Form;
