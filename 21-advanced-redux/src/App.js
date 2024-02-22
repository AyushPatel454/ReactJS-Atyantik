import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const showCart = useSelector((state) => state.cart.isVisible);
  const cart = useSelector((state) => state.cart);
  
  // whenever our cart changes, we want to send an HTTP request to store the cart data in the (Firebase - Realtime database) database.
  useEffect(() => {
    fetch('https://redux-practice-d7720-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart),

    });
  },[cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
