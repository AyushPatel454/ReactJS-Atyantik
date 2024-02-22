import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
const CartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch(cartActions);

  function handleVisibility() {
    dispatch(cartActions.toggleVisibility());
  }

  return (
    <button className={classes.button} onClick={handleVisibility}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
