import { createContext, useReducer, useState } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    // update the state to add meal item.
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
  }

  if (action.type === "REMOVE_ITEM") {
    // remove an item from the state.
  }

  return {...state, items: updatedItems};
}

export function CartContextProvider({ children }) {
  useReducer(cartReducer, { items: [] });

  function addItemHandler(item) {}
  function removeItemHandler(id) {}

  const context = {
    items: [],
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
}

export default CartContext;
