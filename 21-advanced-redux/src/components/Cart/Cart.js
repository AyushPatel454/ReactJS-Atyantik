import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartQuantity = useSelector((state) => state.cart.quantity);
  const cartTotalPrice = useSelector((state) => state.cart.price);
  const items = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartQuantity === 0 && <p>No items in cart</p>}
        {cartQuantity > 0 && items.map((item) => <CartItem key={item.id} item={{ id: item.id, title: item.name, quantity: item.quantity, total: item.quantity * item.price, price: item.price }} />)}
      </ul>
      {cartQuantity !== 0 && <h2>Total Price: {cartTotalPrice}</h2>}
    </Card>
  );
};

export default Cart;
