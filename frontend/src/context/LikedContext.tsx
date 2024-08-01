import React, { createContext, useEffect, useState, ReactNode } from "react";
import { IProduct } from "src/interfaces/Product";
import { getLiked } from "src/service/liked";
import { useUser } from "./UserContext";

interface LikedContextType {
   products: IProduct[];
   setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

const LikedContext = createContext<LikedContextType | undefined>(undefined);

const LikedProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
   const [products, setProducts] = useState<IProduct[]>([]);
   const { isLoggedIn } = useUser();

   useEffect(() => {
      if (isLoggedIn) {
         (async () => {
            const { data } = await getLiked();
            if (data) {
               setProducts(data.favorite.products);
            }
         })();
      } else {
         setProducts([]);
      }
   }, [isLoggedIn, products]);

   return (
      <LikedContext.Provider value={{ products, setProducts }}>
         {children}
      </LikedContext.Provider>
   );
};

const useLiked = () => {
   const context = React.useContext(LikedContext);
   if (!context) {
      throw new Error("useLiked must be used within a LikedProvider");
   }
   return context;
};

export { LikedProvider, useLiked };