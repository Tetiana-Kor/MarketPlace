import React from 'react';
import { useForm } from 'react-hook-form';
import { FILTER_COUNTRIES } from '../../utils/const';
import s from './Form.module.css';
import {
  editProduct,
  fetchOwnProductsById,
} from '../../redux/Product/product-operations';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import {
  setStatusMyProduct,
  getMyProductDetails,
} from '../../redux/Product/product-selectors';
import { useParams } from 'react-router-dom';

const schema = yup
  .object({
    name: yup.string().required(),
    price: yup.number().positive().integer().required(),
    origin: yup.string().required(),
  })
  .required();

const FormForOwnProd = () => {
  const dispatch = useDispatch();
  const status = useSelector(setStatusMyProduct);
  const myProductDetails = useSelector(getMyProductDetails);
  const { productId } = useParams();
  // dispatch(fetchOwnProductsById(productId));

  // console.log('productId: ', productId);
  // console.log('product: ', product);
  // console.log(
  //   'dispatch(fetchOwnProductsById(productId)) : ',
  //   dispatch(fetchOwnProductsById(productId)),
  // );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: myProductDetails.name,
      price: myProductDetails.price,
      origin: myProductDetails.origin,
    },
    resolver: yupResolver(schema),
  });

  const onSumbit = (data) => {
    dispatch(editProduct({ productId, product: data }));
    // reset();
  };

  return (
    <>
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
          {errors?.name && (
            <p>Product should contain min 3 max 20 characters</p>
          )}
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

        <Button type='submit' className={s.input}>
          Confirm changes
        </Button>
        <Button type='submit' className={s.input}>
          Cancel editing
        </Button>
        <Button type='reset' className={s.input}>
          Reset changes
        </Button>
        {/* <input type="button" onClick={() => reset()} />
      Reset changes */}
        {/* {status === 'success' && <p>Product was changed</p>}
        {status === 'error' && <p>Unexpected error</p>} */}
      </form>
    </>
  );
};

export default FormForOwnProd;
