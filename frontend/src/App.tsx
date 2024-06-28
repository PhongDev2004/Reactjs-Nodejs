import { Route, Routes } from "react-router-dom";
import "./App.css";

import SignIn from "./pages/Sign-in";
import SignUp from "./pages/Sign-up";
import ProductList from "./components/Products";
import Layout from "./components/layout/Layout";
import ProductDetail from "./components/ProductDetail";
import CartProduct from "./components/CartProduct";
import LayoutAdmin from "./components/layout/LayoutAdmin";
import Dashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartProduct />} />
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
