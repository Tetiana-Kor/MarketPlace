import React, { useEffect } from 'react';
import LoaderRings from '../ui-kit/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../ui-kit/Button/Button';
import { PRODUCT_ROUTE } from '../routes/constantsRoutes';
import s from './Product.module.css';
import { fetchProducts } from '../redux/Product/product-operations';
import { addProduct } from '../redux/Product/basket-slice';
import {
  getProducts,
  getFilteredItems,
  setStatusProduct,
} from '../redux/Product/product-selectors';
import Filter from '../components/Filter/FilterCountries';
import FilterByPrice from '../components/Filter/FilterByPrice';

function ProductView() {
  const products = useSelector(getProducts);
  const filteredItems = useSelector(getFilteredItems);
  const status = useSelector(setStatusProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts(filteredItems));
  }, [dispatch, filteredItems]);

  const handleAddToBasket = product => {
    dispatch(addProduct(product));
  };

  if (status === 'error') return <p>Unexpected error</p>;

  return (
    <div>
      <h1 className={s.title}>Products</h1>

      <div className={s.filter}>
        <FilterByPrice />
        <Filter />
      </div>
      {status === 'pending' && <LoaderRings />}
      {status === 'success' && (
        <>
          <ul className={s.list}>
            {products.map(product => (
              <li key={product.id} className={s.item}>
                <div onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}>
                  <h3>{product.name}</h3>
                  <p>Price: {product.price} $</p>
                </div>
                <Button onClick={() => handleAddToBasket(product)}>
                  Add to basket
                </Button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default ProductView;
