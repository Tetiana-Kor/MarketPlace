import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';
import { BASKET_ROUTE, PRODUCT_ROUTE } from '../../routes/constantsRoutes';

const Navigation = props => {
  const { pathname } = useLocation();

  const isBasketPage = BASKET_ROUTE === pathname;

  return (
    <nav className={styles.nav}>
      <NavLink
        to={PRODUCT_ROUTE}
        className={styles.link}
        activeclassname={styles.activeLink}
      >
        Products
      </NavLink>

      {!isBasketPage && (
        <NavLink
          to={BASKET_ROUTE}
          className={styles.link}
          activeclassname={styles.activeLink}
        >
          Basket ({props.totalPrice} $)
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
