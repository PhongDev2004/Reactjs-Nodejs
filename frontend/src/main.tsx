
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
import { LikedProvider } from "./context/LikedContext.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider />
      <UserProvider>
        <LikedProvider>
          <CartProvider>
            <FlashErrorProvider>
              <LoadingProvider>
                <App />
              </LoadingProvider>
            </FlashErrorProvider>
          </CartProvider>
        </LikedProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
