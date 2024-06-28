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
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartProduct />} />
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
