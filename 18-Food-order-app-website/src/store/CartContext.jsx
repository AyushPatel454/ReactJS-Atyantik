import { createContext, useReducer, useState } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    // update the state to add meal item.

    // find the index of the item in the state.
    const existingItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });

    // copy the existing items
    const updatedItems = [...state.items];

    // item already exist.
    if (existingItemIndex > -1) {
      // update the quantity of the item.
      const existingItem = state.items[existingItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      // item does not exist in the cart.
      // add item into the cart
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    // remove an item from the state.

    // find the index of the item in the state.
    const existingItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });

    const existingCartItem = state.items[existingItemIndex];

    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
      // remove the item from the cart.
      updatedItems.splice(existingItemIndex, 1); // remove 1 item from the existing index.
    } else {
      // update the quantity of the item.
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      // update the item in the cart.
      updatedItems[existingItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  }

  function clearCart() {
    dispatchCartAction({ type: "CLEAR_CART" });
  }

  const cartContext = {
    items: cart.items,
    addItem: addItem,
    removeItem: removeItem,
    clearCart: clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
