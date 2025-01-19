'use client';

import { createContext, useState, ReactNode } from "react";

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
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 5000); // Hide after 5 seconds
  };

  const addToFavorites = (item: FavoriteItem) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
    showNotification(`${item.name} added to favorites!`);
  };

  const removeFromFavorites = (slug: string) => {
    const newFavorites = favorites.filter((item) => item._id !== slug);
    setFavorites(newFavorites);
    showNotification(`Item removed from favorites!`);
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
      {notification && (
        <div className="text-sm md:text-lg fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded shadow-lg animate-fade">
          {notification}
        </div>
      )}
    </FavoriteContext.Provider>
  );
};
