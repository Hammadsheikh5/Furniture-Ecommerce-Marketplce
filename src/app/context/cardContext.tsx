'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// CartItem type definition
export interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
  image: string;
  size: string;
  color: string;
}

// CartContext type definition
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
  deleteCartItem: (slug: string) => void;
}

// Create the CartContext
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component to manage cart data
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isClient, setIsClient] = useState(false); // Track client-side rendering

  const [notification, setNotification] = useState<string | null>(null);

  // Client-side only code
  useEffect(() => {
    setIsClient(true); // Set to true after the component mounts on the client
  }, []);

  // Fetch cart data from localStorage on client-side only
  useEffect(() => {
    if (isClient) {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, [isClient]); // Runs only after component mounts on the client

  // Function to display notifications
  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 5000); // Hide notification after 5 seconds
  };

  // Function to add items to the cart
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

  // Function to delete an item from the cart
  const deleteCartItem = (slug: string) => {
    const itemToDelete = cart.find((item) => item._id === slug);
    if (itemToDelete) {
      showNotification(`${itemToDelete.name} removed from the cart!`);
    }

    const newCart = cart.filter((val) => val._id !== slug);
    setCart([...newCart]);
  };

  // Function to clear the cart
  const clearCart = () => {
    showNotification('Cart cleared!');
    setCart([]);
  };

  // Effect to update localStorage whenever the cart changes
  useEffect(() => {
    if (isClient) {
      if (cart.length > 0) {
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        localStorage.removeItem('cart');
      }
    }
  }, [cart, isClient]); // Runs when cart state changes and client-side rendering is confirmed

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, deleteCartItem }}>
      {children}

      {/* Notification UI */}
      {notification && (
        <div className="fixed text-sm md:text-lg bottom-8 right-8 bg-green-500 text-white p-4 rounded shadow-lg animate-fade">
          {notification}
        </div>
      )}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
