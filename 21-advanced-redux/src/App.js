import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { notificationActions } from './store/notification-slice.js';
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

    const sendCartData = async () => {
      dispatch(
        notificationActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      );
      const response = await fetch('https://redux-practice-d7720-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }

      dispatch(
        notificationActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );

      // hide the notification after 3 seconds
      setTimeout(() => {
        dispatch(notificationActions.hideNotification());
      }, 3000);
    };

    sendCartData().catch((error) => {
      console.log('error', error);
      dispatch(
        notificationActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );

      // hide the notification after 3 seconds
      setTimeout(() => {
        dispatch(notificationActions.hideNotification());
      }, 3000);
    });
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
