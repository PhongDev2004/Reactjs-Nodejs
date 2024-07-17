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
import ProductAdd from "./pages/admin/ProductAdd";
import ProductEdit from "./pages/admin/ProductEdit";
import CategoriesList from "./pages/admin/CategoriesList";
import CategoriesAdd from "./pages/admin/CategoriesAdd";
import ProtectedRoute from "./components/ProtectedRoute";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/post" element={<Blog />} />
          <Route path="/cart" element={<CartProduct />} />
        </Route>
        <Route
          path="/admin"
          element={
            // <ProtectedRoute requiredRole="admin"  />element={<LayoutAdmin />}
            <LayoutAdmin />
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="/admin/product-add" element={<ProductAdd />} />
          <Route path="/admin/product-edit/:id" element={<ProductEdit />} />
          <Route path="/admin/categories" element={<CategoriesList />} />
          <Route path="/admin/categories-add" element={<CategoriesAdd />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
