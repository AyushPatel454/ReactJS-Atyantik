import { createContext } from 'react';

export const CartContext = createContext({
    // Default value is useful for suggesting. It is not used when a value is provided.
    items: [],
    addItemToCart: () => {},
    updateItemQuantity: () => {},
});
