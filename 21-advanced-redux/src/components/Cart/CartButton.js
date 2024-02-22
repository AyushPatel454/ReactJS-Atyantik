import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { visibilityActions } from '../../store/visiblity-cart.js';
const CartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch(visibilityActions);

  function handleVisibility() {
    dispatch(visibilityActions.toggleVisibility());
  }

  return (
    <button className={classes.button} onClick={handleVisibility}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
