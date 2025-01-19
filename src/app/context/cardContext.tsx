'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
  image: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
  deleteCartItem: (slug: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  // Function to display notifications
  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 5000); // Hide after 5 seconds
  };

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem._id === item._id);
      if (existingItem) {
        showNotification(`${item.name} quantity updated in the cart!`);
        return prev.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity, total: cartItem.total + item.total }
            : cartItem
        );
      }

      showNotification(`${item.name} added to the cart!`);
      return [...prev, item];
    });
  };

  const deleteCartItem = (slug: string) => {
    const itemToDelete = cart.find((item) => item._id === slug);
    if (itemToDelete) {
      showNotification(`${itemToDelete.name} removed from the cart!`);
    }

    const newCart = cart.filter((val) => val._id !== slug);
    setCart([...newCart]);
  };

  const clearCart = () => {
    showNotification('Cart cleared!');
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, deleteCartItem }}>
      {children}

      {/* Notification UI */}
      {notification && (
        <div className="fixed text-sm md:text-lg  bottom-8 right-8 bg-green-500 text-white p-4 rounded shadow-lg animate-fade">
          {notification}
        </div>
      )}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
