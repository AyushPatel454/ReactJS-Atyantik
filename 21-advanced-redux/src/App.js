import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { sendCartData } from './store/cart-slice.js';
import Notification from './components/UI/Notification.js';

let initial = true;

function App() {
  const showCart = useSelector((state) => state.visibility_cart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  // whenever our cart changes, we want to send an HTTP request to store the cart data in the (Firebase - Realtime database) database.
  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <>
      {notification.status !== null && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {showCart.isVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
