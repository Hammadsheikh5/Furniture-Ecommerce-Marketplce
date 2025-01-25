'use client';

import { createContext, useState, ReactNode, useEffect } from "react";

export interface FavoriteItem {
  _id: string;
  name: string;
  price: number;
  image: string;
}

interface FavoriteContextType {
  favorites: FavoriteItem[];
  addToFavorites: (item: FavoriteItem) => void;
  removeFromFavorites: (slug: string) => void;
}

export const FavoriteContext = createContext<FavoriteContextType>({
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
});

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [isClient, setIsClient] = useState(false); // Track client-side rendering

  // Only run client-side code after component mounts
  useEffect(() => {
    setIsClient(true); // Set to true after the component mounts on the client
  }, []);

  // Fetch favorites from localStorage only in client-side
  useEffect(() => {
    if (isClient) {
      const savedFavorites = localStorage.getItem('favorites');
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    }
  }, [isClient]); // Runs when isClient is set to true

  // Save favorites to localStorage on changes (client-side only)
  useEffect(() => {
    if (isClient && favorites.length > 0) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }, [favorites, isClient]); // Runs when favorites state changes

  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 5000); // Hide after 5 seconds
  };

  const addToFavorites = (item: FavoriteItem) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, item];
      return updatedFavorites;
    });
    showNotification(`${item.name} added to favorites!`);
  };

  const removeFromFavorites = (slug: string) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((item) => item._id !== slug);
      return updatedFavorites;
    });
    showNotification(`Item removed from favorites!`);
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
      {notification && (
        <div className="text-sm md:text-lg fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded shadow-lg animate-fade">
          {notification}
        </div>
      )}
    </FavoriteContext.Provider>
  );
};
