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

function App() {
  const { valid, role } = verifyToken();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin-panel" element={valid && role === 1 ? <AdminDashboard2 /> : <Login />} />
          <Route path="/user-panel" element={valid ? <Dashboard /> : <Login />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={!valid ? <Login /> : <HomePage />} />
          <Route path="/ForgetPassword" element={<ForgotPassword />} />
          <Route path="/category" element={<CreateCategory />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
