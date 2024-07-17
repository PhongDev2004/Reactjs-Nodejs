import React, { createContext, useState, useContext } from 'react';
import { IProduct } from '../interfaces/Product';

interface CartContextType {
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  const addToCart = (product: IProduct) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
