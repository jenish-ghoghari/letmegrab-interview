import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Registration";
import ProductList from "./Components/ProductListing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditProduct from "./Components/ProductListing/EditProduct";

function App() {
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {isLogin?.isLogin === true && (
          <>
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/edit-product/:productId" element={<EditProduct />} />
          </>
        )}
          <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
