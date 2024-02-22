import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const { title, price, description, id } = props;

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch(cartActions);

  function handleAddCart() {
    const newQuantity = cart.quantity + 1;
    const newPrice = cart.price + price;

    const updatedItems = cart.items.slice(); // create a deep copy of the items array. (not a reference to the original array Because reference to the original array will mutate the original array.)
    const existingItem = updatedItems.find(item => item.id === id); // find the item with the same id as the current item.
    if(existingItem) {
      const updatedItem = { ...existingItem }; // spread operator to create a new object with the same properties as the existingItem object.
      updatedItem.quantity++;
      
      const existingItemIndex = updatedItems.findIndex(item => item.id === id);
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({ id, name: title, price, quantity: 1 });
    }

    // update the cart state with the new items, quantity, and price.
    dispatch(cartActions.replaceCart({
      items: updatedItems,
      quantity: newQuantity,
      price: newPrice,
    }));





    

    // const itemInfo ={
    //   id,
    //   name: title,
    //   price,
    // }
    // dispatch(cartActions.addToCart(itemInfo));
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
