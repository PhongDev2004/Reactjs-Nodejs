import React, { createContext, useContext, useState, ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";

// Định nghĩa interface cho context
interface LoadingContextType {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
}

// Tạo context với giá trị mặc định
const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

// Provider component
const LoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Hook để sử dụng context
const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

export { LoadingProvider, useLoading };
