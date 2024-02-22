import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const { title, price, description, id } = props;

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch(cartActions);

  function handleAddCart() {
    const itemInfo ={
      id,
      name: title,
      price,
    }
    dispatch(cartActions.addToCart(itemInfo));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
