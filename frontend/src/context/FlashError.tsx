import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

interface FlashErrorContextType {
  error: string | null;
  setError: (message: string) => void;
  clearError: () => void;
}

const FlashErrorContext = createContext<FlashErrorContextType | undefined>(
  undefined
);

const FlashErrorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [error, setError] = useState<string | null>(null);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return (
    <FlashErrorContext.Provider value={{ error, setError, clearError }}>
      {children}
    </FlashErrorContext.Provider>
  );
};

const useFlashError = (): FlashErrorContextType => {
  const context = useContext(FlashErrorContext);
  if (!context) {
    throw new Error("useFlashError must be used within a FlashErrorProvider");
  }
  return context;
};

export { FlashErrorProvider, useFlashError };
