import React, { useEffect } from 'react';
import Loader from '../ui-kit/Loader/Loader';
import Button from '../ui-kit/Button/Button';
import s from './Product.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../redux/Product/product-operations';
import {
  getProductDetails,
  setStatusProductDetails,
} from '../redux/Product/product-selectors';
import { addProduct } from '../redux/Product/basket-slice';

const ProductSubView = () => {
  const { productId } = useParams();
  const productDetails = useSelector(getProductDetails);
  const status = useSelector(setStatusProductDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  const handleAddToBasket = (product) => {
    dispatch(addProduct(product));
  };

  if (status === 'pending') return <Loader />;
  if (status === 'error') return <p>Unexpected error</p>;

  return (
    <>
      {status === 'success' && (
        <div className={s.product_item}>
          <div>
            <h2>{productDetails?.name}</h2>
            <p>Price: {productDetails.price} $</p>
            <p>Country of origin: {productDetails.origin} </p>
            <Button onClick={() => handleAddToBasket(productDetails)}>
              Add to basket
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductSubView;
