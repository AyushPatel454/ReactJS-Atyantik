import { createContext, useState } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products';

export const CartContext = createContext({
    // Default value is useful for suggesting. It is not used when a value is provided.
    items: [],
    addItemToCart: () => {},
    updateItemQuantity: () => {},
});

// ---> For providing the context value.
// (data management) so, we can use the context in the components.
export default function CartContextProvider({children}) {
    const [shoppingCart, setShoppingCart] = useState({
        items: [],
      });
      
      // ---> For adding items to the cart.
      function handleAddItemToCart(id) {
        setShoppingCart((prevShoppingCart) => {
          const updatedItems = [...prevShoppingCart.items];
    
          const existingCartItemIndex = updatedItems.findIndex(
            (cartItem) => cartItem.id === id
          );
          const existingCartItem = updatedItems[existingCartItemIndex];
    
          if (existingCartItem) {
            const updatedItem = {
              ...existingCartItem,
              quantity: existingCartItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
          } else {
            const product = DUMMY_PRODUCTS.find((product) => product.id === id);
            updatedItems.push({
              id: id,
              name: product.title,
              price: product.price,
              quantity: 1,
            });
          }
    
          return {
            items: updatedItems,
          };
        });
      }
      
      // ---> For updating the quantity of the items in the cart.
      function handleUpdateCartItemQuantity(productId, amount) {
        setShoppingCart((prevShoppingCart) => {
          const updatedItems = [...prevShoppingCart.items];
          const updatedItemIndex = updatedItems.findIndex(
            (item) => item.id === productId
          );
    
          const updatedItem = {
            ...updatedItems[updatedItemIndex],
          };
    
          updatedItem.quantity += amount;
    
          if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemIndex, 1);
          } else {
            updatedItems[updatedItemIndex] = updatedItem;
          }
    
          return {
            items: updatedItems,
          };
        });
      }
    
      // ---> For passing the context value.
      const ctxValue = {
        items: shoppingCart.items,
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateCartItemQuantity,
      }

      return (
        <CartContext.Provider value={ctxValue}>
          {children}
        </CartContext.Provider>
      );
}
