import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { ICart } from "src/interfaces/Cart";
import { getCart } from "src/service/cart";
import { useUser } from "./UserContext";

interface CartContextType {
  cart: ICart | null;
  quantity: number | string;
  setQuantity: React.Dispatch<React.SetStateAction<number | string>>;
  setCart: React.Dispatch<React.SetStateAction<ICart | null>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<ICart | null>(null);
  const [quantity, setQuantity] = useState<number | string>(0);
  const { isLoggedIn } = useUser();

  useEffect(() => {
    if (isLoggedIn) {
      (async () => {
        const response = await getCart();
        // setCart(response.data);
        setCart(response.data);
        setQuantity(response.data.result);
      })();
    } else {
      setCart(null);
      setQuantity(0);
    }
  }, [isLoggedIn]);
  return <CartContext.Provider value={{ cart, setCart, quantity, setQuantity }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
