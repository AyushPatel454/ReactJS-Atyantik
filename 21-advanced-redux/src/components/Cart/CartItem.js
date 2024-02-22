import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch(cartActions);

  function handleDecrementOrder() {
    const itemInfo = {
      id,
    }
    dispatch(cartActions.decrementQuantity(itemInfo));
  }

  function handleIncrementOrder() {
    const itemInfo = {
      id,
    }
    dispatch(cartActions.incrementQuantity(itemInfo));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecrementOrder} disabled={quantity === 0}>-</button>
          <button onClick={handleIncrementOrder}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
