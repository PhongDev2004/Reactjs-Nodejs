import { Route, Routes } from 'react-router-dom';
import './App.css';
// import SignIn from './pages/Sign-in';
import SignUp from './pages/Sign-up';
import Layout from './components/layout/Layout';
import ProductDetail from './pages/ProductDetail';
import CartProduct from './pages/Cart';
import LayoutAdmin from './components/layout/LayoutAdmin';
import Dashboard from './pages/admin/Dashboard';
import NotFound from './pages/NotFound';
import ProductAdd from './pages/admin/ProductAdd';
import ProductEdit from './pages/admin/ProductEdit';
import CategoriesList from './pages/admin/CategoriesList';
import CategoriesAdd from './pages/admin/CategoriesAdd';
import ProtectedRoute from './components/ProtectedRoute';
import Blog from './pages/Blog';
import AccountPage from './pages/AccountPage';
import Checkout from './pages/Checkout';
import Homepage from './pages/Homepage';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/login" element={<SignIn />} /> */}
        <Route path="/register" element={<SignUp />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/post" element={<Blog />} />
          <Route path="/cart" element={<ProtectedRoute element={<CartProduct />} />} />
          <Route path="/checkout" element={<ProtectedRoute element={<Checkout />} />} />
          <Route path="/profile" element={<ProtectedRoute element={<AccountPage />} />} />
        </Route>
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="admin" element={<LayoutAdmin />} />
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
