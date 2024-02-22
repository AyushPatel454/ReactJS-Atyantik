import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartQuantity = useSelector((state) => state.cart.quantity);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartQuantity === 0 && <p>No items in cart</p>}
        {cartQuantity > 0 && <CartItem
          item={{ title: 'Test Item', quantity: cartQuantity, total: cartQuantity * 6, price: 6 }}
        />}
      </ul>
    </Card>
  );
};

export default Cart;
