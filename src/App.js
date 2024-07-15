import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import { verifyToken } from "./pages/Auth/verifyToken";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import AdminDashboard2 from "./pages/Admin/AdminDashboard2";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Product from "./pages/Admin/Product"
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import User from "./pages/Admin/User";

function App() {
  const { valid, role } = verifyToken();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard/admin" element={valid && role === 1 ? <AdminDashboard2 /> : <Login />} />
          <Route path="/dashboard/user" element={valid ? <Dashboard /> : <Login />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ForgetPassword" element={<ForgotPassword />} />
          <Route path="/dashboard/admin/create-category" element={<CreateCategory />} />
          <Route path="/dashboard/admin/create-product" element={<CreateProduct />} />
          <Route path="/dashboard/admin/products" element={<Product />} />
          <Route path="/dashboard/admin/product/:slug" element={<UpdateProduct />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Product/:slug" element={<ProductDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:slug" element={<CategoryProduct />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="dashboard/user/orders" element={<Orders />} />
          <Route path="/dashboard/user/profile" element={<Profile />} />
          <Route path="/dashboard/admin/users" element={<User />} />

          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
