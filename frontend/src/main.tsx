
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ToastProvider from "./components/ui/Toast-provider.tsx";
import { LoadingProvider } from "./context/LoadingErrorContext.tsx";
import { FlashErrorProvider } from "./context/FlashError.tsx";
import { UserProvider } from "./context/UserContext.tsx";
import { CartProvider } from "./context/CartContext.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider />
      <UserProvider>
        <CartProvider>
          <FlashErrorProvider>
            <LoadingProvider>
              <App />
            </LoadingProvider>
          </FlashErrorProvider>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
