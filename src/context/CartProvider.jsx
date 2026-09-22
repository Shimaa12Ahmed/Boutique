import { useMemo, useState } from 'react';

import { CartContext } from './CartContext';

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.product.id === product.id);

      if (existingItem) {
        return currentItems.map((item) => (
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
      }

      return [...currentItems, { product, quantity: 1 }];
    });
  };

  const increaseQuantity = (productId) => {
    setItems((currentItems) => currentItems.map((item) => (
      item.product.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )));
  };

  const decreaseQuantity = (productId) => {
    setItems((currentItems) => currentItems
      .map((item) => (
        item.product.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ))
      .filter((item) => item.quantity > 0));
  };

  const removeItem = (productId) => {
    setItems((currentItems) => currentItems.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  const value = useMemo(() => ({
    items,
    cartCount,
    cartTotal,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart,
  }), [items, cartCount, cartTotal]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
